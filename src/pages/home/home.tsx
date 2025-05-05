import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../store/slice/projectsSlice';
import { type IProject } from '../../store/store.interface';
import { CardProject } from '@/components/global/cardProject/cardProject';
import imageFamily from '@/assets/multimedia/imagenes/familia.png';
import { AudioStreamPlayer } from '@/components/global/prove/prove';

export const Home = (): React.ReactNode => {
	return <AudioStreamPlayer />;
};
