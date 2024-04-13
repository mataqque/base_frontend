import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';
import { type IProject } from '@/store/store.interface';
import { motion } from 'framer-motion';
import './card.scss';

interface IProps {
	dataindex: number;
	dataItem: IProject;
}

export const CardProject = ({ dataItem, dataindex }: IProps): JSX.Element => {
	const [activeSkeleton, _setActiveSkeleton] = useState<boolean>(true);
	const { address, status, render, district } = dataItem;

	return (
		<motion.div
			key='title-home'
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 0, opacity: 0 }}
			transition={{ duration: 1, type: 'tween', delay: 0.1 * dataindex, ease: 'easeOut' }}
			className='content-card w-full overflow-hidden relative '
		>
			<div className='card-item mb-4 overflow-hidden relative'>
				<div className='content-render relative'>
					<div className='elipse-card w-[5rem] h-[2.5rem] bg-primary absolute top-[1rem] left-[1rem] rounded-full flex items-center justify-center px-3'>
						<img src={dataItem.logoCard} alt='' />
					</div>
					<img className='render' src={render}></img>
					<div className='fase-content'>
						<div className='fase b-'></div>
					</div>
					<div className='shadow-card absolute top-0 w-full h-full bg-[#123237cb] flex items-center justify-center flex-col gap-10'>
						<img src={dataItem.logoCard} alt='' className='w-[8rem] logo-shadow' />
						<div className='info-shadow flex gap-4'>
							<div className='flex flex-col'>
								<span className='text-white font-poppins_light'>Depas</span>
								<span className='text-white text-1/3'>2 y 3 Dorms.</span>
							</div>
							<div className='flex flex-col'>
								<span className='text-white font-poppins_light'>Desde</span>
								<span className='text-white text-1/3'>s/100000</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='content-title-card flex flex-col border border-solid border-black rounded-md py-1 px-4 mb-4 w-max'>
				<span className='title'>{status}</span>
			</div>
			<h3 className='text-primary font-poppins_semi_bold text-1/2 mb-2 leading-none'>{district}</h3>
			<h4 className='text-primary leading-none font-poppins_medium'>{address}</h4>
		</motion.div>
	);
};
