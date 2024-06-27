import { type IProject, validWhatsapp } from '../../store.interface';
import renderDalias from '@/assets/multimedia/imagenes/dalia.png';
import logoDalias from '@/assets/multimedia/icons/card/elipse-dalias.svg?url';
export const DALIAS: IProject = {
	project_id: 3,
	link: '/dalias',
	project_name: 'example',
	logo: '',
	logoCard: logoDalias,
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
