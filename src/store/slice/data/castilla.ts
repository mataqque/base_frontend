import { type IProject, validWhatsapp } from '../../store.interface';
import renderCastilla from '@/assets/multimedia/imagenes/castilla.png';
export const CASTILLA: IProject = {
	project_id: 4,
	project_name: 'Castilla',
	status: 'En Preventa',
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	tipologies: 'Vivienda',
	district: 'Surco',
	address: 'CA. JUAN CASTILLA 898',
	dorms: ['1'],
	meters: { from: 1, to: 100 },
	render: renderCastilla,
};
