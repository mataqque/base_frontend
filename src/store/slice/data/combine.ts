import { type IProject } from '../../store.interface';


export const data = new Map<number, IProject>([

]);


export type Project = typeof data;

export type Projects = Project[];
