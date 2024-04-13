import { type IProject, validWhatsapp } from '../../store.interface';
import renderCastilla from '@/assets/multimedia/imagenes/castilla.png';
import logoCastilla from '@/assets/multimedia/icons/card/elipse-castilla.svg?url';
export const CASTILLA: IProject = {
	project_id: 4,
	link: '/castilla',
	project_name: 'Castilla',
	logo: '',
	logoCard: logoCastilla,
	district: 'Surco',
	status: 'En Preventa',
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	tipologies: 'Vivienda',
	address: 'CA. JUAN CASTILLA 898',
	dorms: ['1'],
	meters: { from: 1, to: 100 },
	render: renderCastilla,
};
