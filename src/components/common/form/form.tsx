import { Formik, type FormikConfig } from 'formik';
import { type FormEventHandler } from 'react';

interface FormProps {
	initialValues: object;
	validationSchema: any;
	onSubmit: any;
	children: any;
}
export interface ParametersForm {
	touched: any;
	errors: any;
	handleSubmit: FormEventHandler<HTMLFormElement>;
	isSubmitting: boolean;
}
export type FormikSubmitHandler<T> = FormikConfig<T>['onSubmit'];
function getErrorsFromValidationError(validationError: any) {
	const FIRST_ERROR = 0;
	return validationError.inner.reduce((errors: any, error: any) => {
		return {
			...errors,
			[error.path]: error.errors[FIRST_ERROR],
		};
	}, {});
}

export default function validate(getValidationSchema: any) {
	return (values: any) => {
		const validationSchema = getValidationSchema(values);
		try {
			validationSchema.validateSync(values, { abortEarly: false });
			return {};
		} catch (error) {
			return getErrorsFromValidationError(error);
		}
	};
}
export const FormContainer = ({ initialValues, validationSchema, onSubmit, children }: FormProps) => {
	return (
		<Formik enableReinitialize isInitialValid={true} initialValues={initialValues} validate={validate(validationSchema)} onSubmit={onSubmit}>
			{children}
		</Formik>
	);
};
