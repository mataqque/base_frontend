import { Footer } from '@/components/global/footer/footer';
import Navbar from '@/components/global/navbar/navbar';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export const PublicRoute = (): JSX.Element => {
	return (
		<div className='public'>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};
