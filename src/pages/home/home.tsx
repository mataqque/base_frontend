import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../store/slice/projectsSlice';
import { type IProject } from '../../store/store.interface';
import { SectionBanner } from './banner/banner';
import { CardProject } from '@/components/global/cardProject/cardProject';

export const Home = (): React.ReactNode => {
	const data = useSelector(selectProjects);
	return (
		<div className='text-1/5 '>
			{/* <SectionBanner></SectionBanner> */}
			<motion.h2
				key='title-home'
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 0, opacity: 0 }}
				transition={{ duration: 0.5, type: 'spring', delay: 0.2, stiffness: 200 }}
				className='xlg:text-2/2 text-1/9 mobile:text-1/6 text-primary text-center mb-4 mobile:mb-4 leading-tight'
			>
				Elige hoy tu próximo departamento
			</motion.h2>
			<div className='container'>
				<ProjectsAvailable data={Array.from(data.values())}></ProjectsAvailable>
			</div>
		</div>
	);
};

export const ProjectsAvailable = ({ data }: { data: IProject[] }): JSX.Element => {
	console.log(data);
	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] lg:gap-x-10 gap-x-20  gap-y-8' id='projects'>
			{data.map((project, index) => {
				return <CardProject dataItem={project} dataindex={index} key={'card-project' + index}></CardProject>;
			})}
		</div>
	);
};
