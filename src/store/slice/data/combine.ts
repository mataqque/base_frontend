import { type IProject } from '../../store.interface';
import { WIESE } from './wiese';
import { MONTESIERPE } from './monte-sierpe';
import { CASTILLA } from './castilla';
import { DALIAS } from './dalias';

export const data = new Map<number, IProject>([
	[WIESE.project_id, WIESE],
	[MONTESIERPE.project_id, MONTESIERPE],
	[CASTILLA.project_id, CASTILLA],
	[DALIAS.project_id, DALIAS],
]);

const projectIdsToNames = new Map<string, number>([
	[WIESE.project_name, WIESE.project_id],
	[MONTESIERPE.project_name, MONTESIERPE.project_id],
]);

const projectNamesToIds = new Map<string, number>();

for (const [id, name] of projectIdsToNames) {
	projectNamesToIds.set(id, name);
}

export type Project = typeof data;

export type Projects = Project[];
