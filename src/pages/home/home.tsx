import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../store/slice/projectsSlice';
import { type IProject } from '../../store/store.interface';
import { CardProject } from '@/components/global/cardProject/cardProject';
import imageFamily from '@/assets/multimedia/imagenes/familia.png';

export const Home = (): React.ReactNode => {
	const data = useSelector(selectProjects);
	return <div className='text-1/5 '></div>;
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
