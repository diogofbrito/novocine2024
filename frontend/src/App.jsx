import React  from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AnimatePresence, motion } from 'framer-motion';


function App() {
	    const location = useLocation();


	return (
		<>
			<NavBar />
			<AnimatePresence mode='wait'>
				<motion.div
					key={location.pathname} 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					<Outlet /> 
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default App;
