import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home.jsx';
import { Arquivo } from './pages/Arquivo.jsx';
import { Filme } from './pages/Filme.jsx';
import { Sobre } from './pages/Sobre.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				path: '/',
				element: <Home />,
			},
			{
				path: '/en',
				element: <Home />,
			},
			{
				path: '/sobre',
				element: <Sobre />,
			},
			{
				path: '/about',
				element: <Sobre />,
			},
			{
				path: '/arquivo',
				element: <Arquivo />,
			},
			{
				path: '/archive',
				element: <Arquivo />,
			},
			{
				path: '/arquivo/:slug',
				element: <Filme />,
			},
			{
				path: '/archive/:slug',
				element: <Filme />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
