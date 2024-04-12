import logo from '@/assets/multimedia/icons/icon-brand.svg';
import { Link } from 'react-router-dom';

export const Footer = (props: any): JSX.Element => {
	return (
		<footer className='footer bg-primary'>
			<div className='container flex flex-row py-10 sm:flex-wrap md:flex-nowrap'>
				<div className='content-brand '>
					<div className='mask icon-brand bg-secondary w-5 bg-white mobile:w-8'>
						<img src={logo} alt='' />
					</div>
				</div>
				<div className='flex content-column mr-auto mobile:gap-12 mobile:align-start mobile:justify-start'>
					<div className='column flex flex-col'>
						<span className='t-column IBMPlexSans-Bold text-letter mobile:text-left'>Proyectos</span>
					</div>
					<div className='column flex flex-col'>
						<span className='t-column IBMPlexSans-Bold text-letter mobile:text-left'>Promsal</span>
						<Link to={'/conocenos'} className='sub-t-column text-primary mobile:text-left hover:opacity-100 opacity-70'>
							Conócenos
						</Link>
						<Link to={'/refierenos'} className='sub-t-column text-primary mobile:text-left hover:opacity-100 opacity-70'>
							Refiérenos
						</Link>
						<Link to={'/contactanos'} className='sub-t-column text-primary mobile:text-left hover:opacity-100 opacity-70'>
							Contáctanos
						</Link>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='flex mb-8 justify-end mobile:justify-start sm:justify-center'>
						<a
							href='https://www.facebook.com/InmobiliariaPromsal'
							target='_blank'
							className='rounded-full flex items-center justify-center w-14 h-14 duration-300 cursor-pointer mr-4 border  border-solid hover:bg-primary hover:text-white group duration-300'
						>
							<div className='icon-mask icon-facebook h-5 w-5 mask bg-primary group-hover:bg-white duration-300'></div>
						</a>
						<a
							href='https://www.instagram.com/promsalinmobiliaria/'
							target='_blank'
							className='rounded-full flex items-center justify-center w-14 h-14 duration-300 cursor-pointer mr-4 border border-solid hover:bg-primary hover:text-white group duration-300'
						>
							<div className='icon-mask icon-instagram h-5 w-5 bg-primary group-hover:bg-white duration-300'></div>
						</a>
						<a
							href='https://www.youtube.com/@inmobiliariapromsal857'
							target='_blank'
							className='rounded-full flex items-center justify-center w-14 h-14 duration-300 cursor-pointer border border-solid hover:bg-primary hover:text-white group duration-300'
						>
							<div className='icon-mask icon-youtube h-5 w-5 mask bg-primary group-hover:bg-white duration-300'></div>
						</a>
					</div>
					<Link to='/libro-de-reclamaciones' className='flex sm:justify-center '>
						{/* <img src={book} className='icon-book' alt='' /> */}
					</Link>
				</div>
			</div>
			<div className='w-full py-6 bar-footer'>
				<div className='container flex justify-between items-between'>
					<span className='text-primary text-0/8xl mobile:order-2'>Copyright © 2023 Promsal. Todos los derechos reservados. </span>
					<div className='mobile:order-1 mobile:text-center mobile:flex mobile:flex-wrap mobile:justify-center'>
						<a target='_blank' href='/files/Promsal-Inmobiliaria-Términos-y-Condiciones.pdf' className='mx-2 text-primary text-0/8xl whitespace-nowrap'>
							Términos y condiciones
						</a>
						<a target='_blank' href='/files/Promsal-Políticas-de-Privacidad-de-Datos.pdf' className='mx-2 text-primary text-0/8xl whitespace-nowrap'>
							Políticas de Privacidad de Datos
						</a>
						<a target='_blank' href='/files/Promsal-Protección-al-Consumidor.pdf' className='mx-2 text-primary text-0/8xl whitespace-nowrap'>
							Protección al Consumidor
						</a>
					</div>
					<div className='mobile:order-3'>
						<span className='text-primary text-0/8xl'>
							Created with ♥ by{' '}
							<a href='https://www.formulaperu.com/' target='_blank'>
								Fórmula
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
