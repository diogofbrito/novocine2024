import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { LangProvider } from './components/LangProvider';
import { SmoothScrolling } from './components/SmoothScrolling';




function App() {
	const location = useLocation();
	const isSoonPage = location.pathname === '/';

	return (
		<SmoothScrolling>
			<LangProvider>
				{!isSoonPage && <NavBar />}
				<Outlet />
	
			</LangProvider>
		</SmoothScrolling>
	);
}

export default App;
