import { type IProject } from '../../store.interface';
import { CASTILLA } from './castilla';
import { MONTESIERPE } from './monte-sierpe';

export const data = new Map<number, IProject>([
	[CASTILLA.project_id, CASTILLA],
	[MONTESIERPE.project_id, MONTESIERPE],
]);

const projectIdsToNames = new Map<string, number>([
	[CASTILLA.project_name, CASTILLA.project_id],
	[MONTESIERPE.project_name, MONTESIERPE.project_id],
]);

const projectNamesToIds = new Map<string, number>();

for (const [id, name] of projectIdsToNames) {
	projectNamesToIds.set(id, name);
}

console.log(projectIdsToNames);

export type Project = typeof data;

export type Projects = Project[];
