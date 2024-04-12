type IPropsChangeActive = (value: string, firstValue: string, secondValue: string) => string;

export const changeActive: IPropsChangeActive = (value, firstValue, secondValue): string => {
	let newStatus;
	switch (value) {
		case '':
			newStatus = 'open';
			break;
		case firstValue:
			newStatus = 'close';
			break;
		case secondValue:
			newStatus = 'open';
			break;
		default:
			newStatus = '';
	}
	return newStatus;
};

export const callbackDelay = (callback: VoidFunction, delay?: number): void => {
	const delayInterval = setInterval(
		() => {
			callback();
			clearInterval(delayInterval);
		},
		!delay ? 1000 : delay
	);
};
