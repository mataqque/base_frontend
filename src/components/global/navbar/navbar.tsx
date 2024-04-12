import { useState } from 'react';
import './navbar.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { changeActive } from '@/helpers/helpers';
import brand from '@/assets/multimedia/icons/icon-brand.svg';

export default function Navbar(): JSX.Element {
	const [open, setOpen] = useState<string>('');

	const openNavbar = (): void => {
		const newValue: string = changeActive(open, 'open', 'close');
		setOpen(newValue);
	};

	return (
		<div className={'flex h-[6rem]'}>
			<div className='container flex justify-between'>
				<Link to='/' className='bold h-full flex items-center justify-center w-[7rem] h-[3rem]'>
					<img className='w-full h-full' src={brand}></img>
				</Link>
				<ContentLinks openNavbar={openNavbar}></ContentLinks>
			</div>
		</div>
	);
}

interface IPropsNavbarLinkItem {
	to: string;
	children: JSX.Element | JSX.Element[];
	className: string;
}

export function NavbarLink(props: IPropsNavbarLinkItem): JSX.Element {
	const { to, className } = props;
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'link active ' : '')}>
			{props.children}
		</NavLink>
	);
}

const ContentLinks = ({ openNavbar }: { openNavbar: VoidFunction }): JSX.Element => {
	const navigate = useNavigate();
	return (
		<div className='flex'>
			<div className='items-center flex mobile:mr-auto gap-12 mr-10'>
				<div
					className='link'
					onClick={() => {
						openNavbar();
					}}
				>
					<NavLink to='/conocenos' className='label text-primary hover:font-extrabold opacity-90'>
						Nosotros
					</NavLink>
				</div>
				<div
					className='link'
					onClick={() => {
						openNavbar();
					}}
				>
					<NavLink to='/conocenos' className='label text-primary hover:font-extrabold opacity-90'>
						Nosotros
					</NavLink>
				</div>
				<div
					className='link'
					onClick={() => {
						openNavbar();
					}}
				>
					<NavLink to='/conocenos' className='label text-primary hover:font-extrabold opacity-90'>
						Conócenos
					</NavLink>
				</div>
			</div>
			<div className='flex justify-center items-center mobile:flex-wrap mobile:mr-auto mobile:mb-8 mobile:mb-auto'>
				<Link
					to='/ecommerce'
					className='animation-btn gap-2 rounded-full cursor-pointer h-12 text-1/1xl w-max bg-secondary flex items-center justify-center px-6 py-1 text-white leading-tight font-poppins_thin whitespace-nowrap	'
				>
					¡Elige tu depa! <div className='icon-signal-right mask bg-primary w-4 h-4 ml-2'></div>
				</Link>
			</div>
		</div>
	);
};
