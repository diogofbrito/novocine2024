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
				element: <Home />,
			},
			{
				path: '/Sobre',
				element: <Sobre />,
			},
			{
				path: '/Arquivo',
				element: <Arquivo />,
			},
			{
				path: '/Arquivo/:slug',
				element: <Filme />,
			},

			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
