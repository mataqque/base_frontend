import { useEffect, useRef, useState } from 'react';
import { io, type Socket } from 'socket.io-client';

export const AudioStreamPlayer = () => {
	const [status, setStatus] = useState<'Disconnected' | 'Connecting' | 'Connected' | 'Error'>('Disconnected');
	const [userInteracted, setUserInteracted] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const audioRef = useRef<HTMLAudioElement>(null);
	const socketRef = useRef<Socket | null>(null);
	const mediaSourceRef = useRef<MediaSource | null>(null);
	const sourceBufferRef = useRef<SourceBuffer | null>(null);
	const queueRef = useRef<Uint8Array[]>([]);
	const isActiveRef = useRef(true);
	const sourceBufferReadyRef = useRef(false);
	const isFirstChunkRef = useRef(true);
	const retryCountRef = useRef(0);

	const logError = (context: string, error: unknown) => {
		const errorMsg = error instanceof Error ? error.message : String(error);
		console.error(`[${context}]`, error);
		setErrorMessage(`${context}: ${errorMsg}`);
		setStatus('Error');
	};

	const resetAudioPipeline = () => {
		// Limpiar MediaSource
		if (mediaSourceRef.current) {
			try {
				if (mediaSourceRef.current.readyState === 'open') {
					mediaSourceRef.current.endOfStream();
				}
				URL.revokeObjectURL(audioRef.current?.src ?? '');
			} catch (e) {
				console.warn('Error ending MediaSource stream:', e);
			}
			mediaSourceRef.current = null;
		}

		// Limpiar SourceBuffer
		sourceBufferRef.current = null;
		sourceBufferReadyRef.current = false;

		// Resetear flags
		isFirstChunkRef.current = true;

		// Limpiar cola
		queueRef.current = [];

		// Resetear elemento de audio
		if (audioRef.current) {
			try {
				audioRef.current.pause();
				audioRef.current.removeAttribute('src');
				audioRef.current.load();
			} catch (e) {
				console.warn('Error resetting audio element:', e);
			}
		}
	};

	const initializeMediaSource = () => {
		if (mediaSourceRef.current) return;

		try {
			const mediaSource = new MediaSource();
			mediaSourceRef.current = mediaSource;

			mediaSource.addEventListener('sourceopen', () => {
				if (!mediaSource || mediaSource.readyState !== 'open') return;

				try {
					const mimeType = 'audio/webm; codecs=opus';
					if (!MediaSource.isTypeSupported(mimeType)) {
						logError('Codec Not Supported', 'Opus codec not supported');
						return;
					}

					const sourceBuffer = mediaSource.addSourceBuffer(mimeType);
					sourceBuffer.mode = 'sequence';
					sourceBufferRef.current = sourceBuffer;
					sourceBufferReadyRef.current = true;

					sourceBuffer.addEventListener('error', e => {
						console.error('SourceBuffer error:', e);
						sourceBufferReadyRef.current = false;
					});

					sourceBuffer.addEventListener('updateend', processQueue);
					processQueue();
				} catch (error) {
					logError('SourceBuffer Creation Failed', error);
				}
			});

			if (audioRef.current) {
				const objectUrl = URL.createObjectURL(mediaSource);
				audioRef.current.src = objectUrl;
				audioRef.current.onerror = () => {
					if (audioRef.current?.error) {
						logError('Audio Playback Error', audioRef.current.error.message);
					}
				};
			}
		} catch (error) {
			logError('MediaSource Initialization Failed', error);
		}
	};

	const processQueue = () => {
		if (!isActiveRef.current || !sourceBufferReadyRef.current || !sourceBufferRef.current || sourceBufferRef.current.updating || queueRef.current.length === 0) {
			return;
		}

		const chunk = queueRef.current.shift();
		if (!chunk) return;

		try {
			sourceBufferRef.current.appendBuffer(chunk);
		} catch (error) {
			console.error('AppendBuffer error, requeuing chunk:', error);
			queueRef.current.unshift(chunk);
			sourceBufferReadyRef.current = false;
			setTimeout(processQueue, 50);
		}
	};

	const setupSocketConnection = () => {
		if (socketRef.current) {
			socketRef.current.disconnect();
			socketRef.current = null;
		}

		setStatus('Connecting');
		setErrorMessage(null);
		socketRef.current = io('http://192.168.100.5:8080', {
			transports: ['websocket'],
			reconnectionAttempts: 3,
			reconnectionDelay: 1000,
			timeout: 5000,
		});

		socketRef.current.on('connect', () => {
			if (isActiveRef.current) {
				setStatus('Connected');
				retryCountRef.current = 0;
			}
		});

		socketRef.current.on('disconnect', reason => {
			if (isActiveRef.current && reason !== 'io client disconnect') {
				setStatus('Disconnected');
				logError('Socket Disconnected', reason);
			}
		});

		socketRef.current.on('connect_error', error => {
			logError('Socket Connection Error', error);
		});

		socketRef.current.on('audio-chunk', (chunk: ArrayBuffer) => {
			if (!isActiveRef.current) return;

			const uint8Chunk = new Uint8Array(chunk);

			// Solo verificar header en el primer chunk
			if (isFirstChunkRef.current) {
				if (uint8Chunk.length >= 4 && uint8Chunk[0] === 0x1a && uint8Chunk[1] === 0x45 && uint8Chunk[2] === 0xdf && uint8Chunk[3] === 0xa3) {
					isFirstChunkRef.current = false;
					initializeMediaSource();
				} else {
					console.error('Invalid WebM header in first chunk:', uint8Chunk.slice(0, 4));
					return;
				}
			}

			queueRef.current.push(uint8Chunk);
			processQueue();
		});
	};

	useEffect(() => {
		isActiveRef.current = true;
		setupSocketConnection();

		return () => {
			isActiveRef.current = false;
			resetAudioPipeline();
			if (socketRef.current) {
				socketRef.current.disconnect();
				socketRef.current = null;
			}
		};
	}, []);

	const handleRetry = () => {
		resetAudioPipeline();
		setupSocketConnection();
	};

	return (
		<div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }} onClick={() => !userInteracted && setUserInteracted(true)}>
			<h2>Audio Stream Player</h2>
			<div
				style={{
					padding: '10px',
					backgroundColor: status === 'Connected' ? '#e6ffed' : status === 'Error' ? '#fff3e0' : '#ffebee',
					borderRadius: '4px',
					marginBottom: '10px',
				}}
			>
				<div>
					Status: <strong>{status}</strong>
				</div>
				{errorMessage && <div style={{ color: '#d32f2f', marginTop: '5px', fontSize: '0.9em' }}>Error: {errorMessage}</div>}
				{!userInteracted && <div style={{ color: '#d32f2f', marginTop: '5px' }}>Click anywhere to enable audio playback</div>}
			</div>

			<audio ref={audioRef} controls style={{ width: '100%', margin: '10px 0' }} />

			<div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
				<button onClick={handleRetry} style={{ padding: '8px 16px' }}>
					Retry Connection
				</button>
				<button onClick={() => socketRef.current?.disconnect()} disabled={status !== 'Connected'} style={{ padding: '8px 16px' }}>
					Disconnect
				</button>
			</div>

			<div style={{ marginTop: '20px', fontSize: '0.8em', color: '#666' }}>
				<h4>Debug Information:</h4>
				<div>SourceBuffer Ready: {sourceBufferReadyRef.current ? 'Yes' : 'No'}</div>
				<div>Queue Length: {queueRef.current.length}</div>
				<div>First Chunk Received: {!isFirstChunkRef.current ? 'Yes' : 'No'}</div>
			</div>
		</div>
	);
};
