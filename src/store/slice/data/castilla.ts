import { type IProject, type IName, validWhatsapp } from '../../store.interface';

export const CASTILLA: IProject = {
	project_id: 1,
	project_name: 'Castilla',
	address: 'Calle 1',
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	tipologioas: 'Vivienda',
	status: 'En Lanzamiento',
};

console.log(CASTILLA);
