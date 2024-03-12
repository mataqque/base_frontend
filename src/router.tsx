import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/home';
import { PublicRoute } from './pages/routes/publicRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicRoute />,
		children: [{ path: '/', element: <Home /> }],
	},
]);
export default function RoutesDom(props: unknown): JSX.Element {
	return <RouterProvider router={router} />;
}
