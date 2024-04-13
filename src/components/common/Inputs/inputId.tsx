import { generateId } from '@/helpers/helpers';
import { useField } from 'formik';
import { useEffect, useMemo } from 'react';

export const Id = ({ name, form, defaultValue }: { name: string; form?: any; defaultValue?: string }) => {
	const [field, meta, helpers] = useField(name);
	const id = useMemo(() => {
		return defaultValue ?? generateId({ type: 'number' });
	}, [defaultValue]);
	useEffect(() => {
		helpers
			.setValue(id)
			.then(() => {
				console.log('value set');
			})
			.catch(() => {
				console.log('value not set');
			});
	}, [defaultValue]);
	return (
		<div className=''>
			<span className='text-gray-500 text-1/2'>{id}</span>
		</div>
	);
};
