import { Outlet } from 'react-router'

export const PublicRoute = (): JSX.Element => {
	return (
		<div className='public'>
			<Outlet></Outlet>
		</div>
	)
};
