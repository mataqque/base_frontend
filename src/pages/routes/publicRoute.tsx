import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export const PublicRoute = (): JSX.Element => {
	return (
		<div className='public'>
			<nav className='bg-gray-800 text-white text-1/5 h-[6rem] flex items-center justify-center '>
				<ul className='flex justify-around gap-8'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/nosotros'>Nosotros</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet></Outlet>
		</div>
	);
};
