import { type IProject } from '../../store.interface';
import { CASTILLA } from './castilla';
import { MONTESIERPE } from './monte-sierpe';

export const data = new Map<number, IProject>([
	[CASTILLA.project_id, CASTILLA],
	[MONTESIERPE.project_id, MONTESIERPE],
]);

export type Project = typeof data;

export type Projects = Project[];
