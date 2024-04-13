import { type IProject, validWhatsapp } from '../../store.interface';
import renderMonteSierpe from '@/assets/multimedia/imagenes/montesierpe.png';
import logoSierpe from '@/assets/multimedia/icons/card/elipse-monte-sierpe.svg?url';
export const MONTESIERPE: IProject = {
	project_id: 2,
	link: '/monte-sierpe',
	project_name: 'Monte Sierpe',
	logo: '',
	logoCard: logoSierpe,
	contact: '123456',
	whatsapp: validWhatsapp('+51123456789'),
	tipologies: 'Vivienda',
	status: 'En Lanzamiento',
	address: 'CA. MONTE SIERPE 106',
	district: 'Surco',
	dorms: ['1'],
	meters: { from: 1, to: 100 },
	render: renderMonteSierpe,
};

console.log(MONTESIERPE);
