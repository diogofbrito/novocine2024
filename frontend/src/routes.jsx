import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home.jsx';
import { Arquivo } from './pages/Arquivo.jsx';
import { Filme } from './pages/Filme.jsx';
import { Sobre } from './pages/Sobre.jsx';
import { Soon } from './pages/Soon.jsx';
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
				path: '/sobre',
				element: <Sobre />,
			},
			{
				path: '/arquivo',
				element: <Arquivo />,
			},
			{
				path: '/arquivo/:slug',
				element: <Filme />,
			},

			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
