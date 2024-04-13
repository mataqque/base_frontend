export interface IDash {
	dashboardSlice: {
		activeId: number;
	};
}

// interface Project

interface INumberWhatsapp {
	codigoPais: string;
	numeroTelefono: string; // Ya no se separa por código de área
}

export const validWhatsapp = (phone: string): INumberWhatsapp | null => {
	const regex = /^(\+51)(\d{9})$/; // Se ajusta la expresión regular
	const match = regex.exec(phone);

	if (match === null) {
		return null;
	}

	return {
		codigoPais: match[1],
		numeroTelefono: match[2],
	};
};

export type IName = 'Castilla' | 'Monte Sierpe' | 'Wiese' | 'Dalias';
export type IStage = 'Proximamente' | 'En Construcción' | 'En Lanzamiento' | 'Preventa' | 'Entrega Inmediata' | 'Vendido' | 'Inicio de Obra' | 'Próx. Entrega';
export type UniqueProjectName = string & { readonly _unique: unique symbol };
export interface IProjectBase {
	project_id: number;
	link: string;
	project_name: string;
	contact: string;
	whatsapp: INumberWhatsapp | null;
	tipologies: string;
	render: string;
	meters: { from: number; to: number };
	dorms: string[];
	district: string;
	address: string;
	logo: string;
	logoCard: string;
}

export interface IProjectProximamente extends IProjectBase {
	status: 'Proximamente';
}

export interface IProjectEnLanzamiento extends IProjectBase {
	status: 'En Lanzamiento';
}

export interface IProjectEnPreventa extends IProjectBase {
	status: 'En Preventa';
}

export interface IProjectEnConstruccion extends IProjectBase {
	status: 'En Construcción';
	slider: string[];
}
export type IProject = IProjectProximamente | IProjectEnConstruccion | IProjectEnLanzamiento | IProjectEnPreventa;

// export const createUniqueProjectName = (name: string): UniqueProjectName => {
// 	return name as UniqueProjectName;
// };
