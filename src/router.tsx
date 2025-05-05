import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/home';
import { PublicRoute } from './pages/routes/publicRoute';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicRoute />,
		children: [{ path: '/', element: <Home /> }],
	},
]);
export default function RoutesDom(_props: unknown): JSX.Element {
	return (
		<AnimatePresence>
			<RouterProvider router={router} />
		</AnimatePresence>
	);
}
