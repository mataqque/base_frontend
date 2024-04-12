import { type IProject, validWhatsapp } from '../../store.interface';
import fachada from '@/assets/multimedia/imagenes/fachada.png';
export const WIESE: IProject = {
	project_id: 1,
	project_name: 'Wiese',
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	status: 'Proximamente',
	tipologies: '',
	district: 'Surco',
	address: 'JR. AUGUSTO WIESE 530',
	meters: { from: 10, to: 10 },
	dorms: ['1'],
	render: fachada,
};
