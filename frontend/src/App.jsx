import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { LangProvider } from './components/LangProvider';
import { SmoothScrolling } from './components/SmoothScrolling';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUp } from 'lucide-react';



function App() {
	const location = useLocation();
	const isSoonPage = location.pathname === '/';


	return (
		<SmoothScrolling>
			<LangProvider>
				{!isSoonPage && <NavBar />}
				<Outlet />
				<ScrollToTop
					smooth
					component={
						<div className='flex justify-center '>
							<ArrowUp />
						</div>
					}
					style={{
						backgroundColor: 'transparent',
						borderRadius: '50%',
						color: 'var(--text-color-light)',
						border: '1px solid var(--text-color-light)',
					}}
					top={1000}
				/>
			</LangProvider>
		</SmoothScrolling>
	);
}

export default App;
