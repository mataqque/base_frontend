import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/home';
import { PublicRoute } from './pages/routes/publicRoute';
import { AnimatePresence } from 'framer-motion';
import { About } from './pages/about/about';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicRoute />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/nosotros', element: <About /> },
		],
	},
]);
export default function RoutesDom(props: unknown): JSX.Element {
	return (
		<AnimatePresence>
			<RouterProvider router={router} />
		</AnimatePresence>
	);
}
