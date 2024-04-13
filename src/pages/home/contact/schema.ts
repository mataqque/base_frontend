import * as Yup from 'yup';

export const contactShema = () =>
	Yup.object().shape({
		status: Yup.boolean().required(),
		name: Yup.string().required(),
		description: Yup.string().required(),
		imageFileId: Yup.string(),
		parentCategoryId: Yup.string(),
	});

export const initialValues = {
	status: false,
	name: '',
	description: '',
	imageFileId: '',
	parentCategoryId: '',
};
