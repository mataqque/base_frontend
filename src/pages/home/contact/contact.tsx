import { FormContainer, type ParametersForm, type FormikSubmitHandler } from '@/components/common/form/form';
import { InputText } from '@/components/common/Inputs/InputText';
import type * as Yup from 'yup';
import { contactShema, initialValues } from './schema';

export const Contact = (): JSX.Element => {
	const schemaType = contactShema();
	const onSubmit: FormikSubmitHandler<Yup.InferType<typeof schemaType>> = async (values: any, form) => {};
	return (
		<div className='contact py-[10rem]'>
			<div className='container'>
				<h3 className='text-prinary text-2/0 font-poppins_medium mb-2'>Encuentra hoy tu nuevo hogar</h3>
				<span className='text-third mb-8 flex text-1/2'>Bríndanos tus datos para comunicarnos contigo</span>
				<FormContainer initialValues={initialValues} onSubmit={onSubmit} validationSchema={contactShema}>
					{(form: ParametersForm) => {
						const { handleSubmit } = form;
						return (
							<form onSubmit={handleSubmit} className='gap-6 grid grid-cols-2'>
								<InputText name='name' form={form} placeholder='Nombre' type='lg'></InputText>
								<InputText name='name' form={form} placeholder='Nombre'></InputText>
								<InputText name='name' form={form} placeholder='Nombre'></InputText>
								<InputText name='name' form={form} placeholder='Nombre'></InputText>
								<InputText name='name' form={form} placeholder='Nombre'></InputText>
								<InputText name='name' form={form} placeholder='Nombre'></InputText>
							</form>
						);
					}}
				</FormContainer>
			</div>
		</div>
	);
};
