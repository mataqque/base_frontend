import { getNumberAdress } from '@/helpers/helpers';
import { selectProjects } from '@/store/slice/projectsSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import imgBook from '@/assets/multimedia/icons/book.svg?url';

export const Footer = (): JSX.Element => {
	const data = useSelector(selectProjects);
	return (
		<footer className='footer bg-primary'>
			<div className='container'>
				<div className='flex flex-row py-10 sm:flex-wrap md:flex-nowrap'>
					<div className='content-brand '>
						<div className='w-[10rem] h-[5rem]'>
							<div className='w-full h-full bg-gray-300 text-white flex items-center justify-center text-1/4'>Logo</div>
						</div>
					</div>
					<div className='flex content-column ml-auto mr-[6rem] mobile:gap-12 mobile:align-start mobile:justify-start gap-10'>
						<div className='column flex flex-col'>
							<span className='t-column IBMPlexSans-Bold text-white mobile:text-left uppercase font-poppins_regular mb-4'>Proyectos</span>
							{data &&
								Array.from(data.values()).map((project, index) => {
									return (
										<Link to={`/proyectos/${project.link}`} key={index} className='text-1/2 text-white mobile:text-left hover:opacity-100  font-poppins_light'>
											{project.project_name + ' ' + getNumberAdress(project.address)}
										</Link>
									);
								})}
						</div>
						<div className='column flex flex-col'>
							<span className='t-column IBMPlexSans-Bold text-white mobile:text-left uppercase font-poppins_regular mb-4'>CONTACTO</span>
							<a href={'mail:example@example.pe'} className='sub-t-column text-white mobile:text-left hover:opacity-100 '>
								example@example.pe
							</a>
							<a href={'tel:+01 123 1234'} className='sub-t-column text-white mobile:text-left hover:opacity-100 '>
								01 123 1234
							</a>
							<a href={'https://maps.app.goo.gl/EnmPy8EXq8n6RFqb9'} className='sub-t-column text-white mobile:text-left hover:opacity-100 '>
								Av. Primavera 609 - Int. 301,<br></br> San Borja, Lima, Perú.
							</a>
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='flex mb-8 justify-end mobile:justify-start sm:justify-center'>
							<a
								href='#'
								target='_blank'
								className='rounded-full flex items-center justify-center w-14 h-14 duration-300 cursor-pointer mr-4 border  border-solid border-[#1d5158] hover:bg-primary group overflow-hidden'
							>
								<div className='icon-mask icon-facebook h-5 w-5 mask bg-white group-hover:bg-white duration-300'></div>
							</a>
							<a
								href='#'
								target='_blank'
								className='rounded-full flex items-center justify-center w-14 h-14 duration-300 cursor-pointer mr-4 border border-[#1d5158] border-solid hover:bg-primary hover:text-white group'
							>
								<div className='icon-mask icon-instagram h-5 w-5 bg-white group-hover:bg-white duration-300'></div>
							</a>
						</div>
						<Link to='/libro-de-reclamaciones' className='flex sm:justify-center '>
							{/* <img src={book} className='icon-book' alt='' /> */}
						</Link>
					</div>
				</div>
				<div className='w-full bg-primary border border-solid border-t-[#ffffff33] border-b-[#ffffff33]  border-r-0 border-l-0 py-6 flex gap-[6rem] items-center'>
					<div className='w-max flex items-center gap-4'>
						<div className='w-[5rem] h-[3rem]'>
							<div className='mask-center icon-book w-full h-full bg-white'></div>
						</div>
						<span className='text-white text-0/8xl leading-tight font-poppins_light'>
							Libro de <br />
							<span className='font-poppins_medium'>Reclamaciones</span>
						</span>
					</div>
					<Link to='' className='underline text-white ml-auto font-poppins_light text-0/9'>
						Términos y condiciones
					</Link>
					<Link to='' className='underline text-white font-poppins_light text-0/9'>
						Políticas de privacidad de datos
					</Link>
					<Link to='' className='underline text-white font-poppins_light text-0/9'>
						Protección al consumidor
					</Link>
					<Link to='' className='underline text-white font-poppins_light text-0/9'>
						Textos legales
					</Link>
				</div>
				<div className='mobile:order-3 py-6 flex justify-between'>
					<span className='text-white text-0/8xl'>Copyright © {new Date().getFullYear()} example. Todos los derechos reservados</span>
					<span className='text-white text-0/8xl'>
						Created with ♥ by{' '}
						<a href='' target='_blank'>
							example
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};
