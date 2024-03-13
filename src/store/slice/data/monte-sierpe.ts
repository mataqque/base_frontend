import { type IProject, validWhatsapp, type IProjectEnConstruccion } from '../../store.interface';

export const MONTESIERPE: IProject = {
	project_id: 2,
	project_name: 'Castilla',
	address: 'Calle 1',
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	tipologioas: 'Vivienda',
	status: 'En Construcción',
	slider: ['https://www.google.com.pe'],
} satisfies IProjectEnConstruccion;

console.log(MONTESIERPE);
