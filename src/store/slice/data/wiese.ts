import { type IProject, validWhatsapp } from '../../store.interface';
import fachada from '@/assets/multimedia/imagenes/fachada.png';
import logoWiese from '@/assets/multimedia/icons/card/elipse-wiese.svg?url';

export const WIESE: IProject = {
	project_id: 1,
	link: '/example',
	project_name: 'example',
	logo: '',
	logoCard: logoWiese,
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
