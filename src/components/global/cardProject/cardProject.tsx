import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';
import { type IProject } from '@/store/store.interface';
import { motion } from 'framer-motion';

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
			className='content-card w-full'
		>
			<div className='card-item mb-4'>
				{status && (
					<>
						<div className={`item-fase OktaNeue-Normal`}>
							{activeSkeleton ? <Skeleton height={'20px'} width={'100px'} baseColor='#ffffff16' highlightColor='#2ab1ab00'></Skeleton> : <>{status}</>}
						</div>
						{/* <div className='content-brand mask' style={{ WebkitMaskImage: `url(${icon_brand})` }}></div> */}
					</>
				)}
				<div className={`content-render ${status === 'Proximamente' ? 'prox' : ''}`}>
					<img className='render' src={render}></img>
					<div className='fase-content'>
						<div className='fase b-'></div>
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
