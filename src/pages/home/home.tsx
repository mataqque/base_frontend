import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store/store';
import { selectProjects } from '../../store/slice/projectsSlice';
import { type IProject } from '../../store/store.interface';

export const Home = (): React.ReactNode => {
	const data = useSelector(selectProjects);
	const construccion = data.get(2);

	return (
		<div className='text-1/5 container'>
			<motion.h2
				key='title-home'
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 0, opacity: 0 }}
				transition={{ duration: 0.5, type: 'spring', delay: 0.2, stiffness: 200 }}
				className='xlg:text-2/2 text-1/9 mobile:text-1/6 text-secondary text-center mb-4 mobile:mb-4 leading-tight'
			>
				HOME
			</motion.h2>
		</div>
	);
};
