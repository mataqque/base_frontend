import './index.css'
import './assets/scss/index.scss'
// import 'tailwindcss/tailwind.css';
import RoutesDom from './router'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
declare global {
	interface Window {
		$: JQueryStatic;
		jQuery: JQueryStatic;
	}
}
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
	<Provider store={store}>
		<ToastContainer />
		<RoutesDom />
	</Provider>
)
