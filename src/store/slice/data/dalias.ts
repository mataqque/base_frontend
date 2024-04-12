import { type IProject, validWhatsapp } from '../../store.interface';
import renderDalias from '@/assets/multimedia/imagenes/dalia.png';
export const DALIAS: IProject = {
	project_id: 3,
	project_name: 'Monte Sierpe',
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	tipologies: 'Vivienda',
	status: 'En Lanzamiento',
	district: 'Surco',
	address: 'CA. DALIAS 196',
	dorms: ['1'],
	meters: { from: 1, to: 100 },
	render: renderDalias,
};
