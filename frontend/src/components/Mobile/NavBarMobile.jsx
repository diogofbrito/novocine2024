import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function NavBarMobile({ translation, useLang }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { lang } = useLang();

	return (
		<div className='iphone:block hidden relative '>
			<button className='px-3 py-1 border rounded-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<span className='menuMobile block w-6 h-0.5 mb-0.5'></span>
				<span className='menuMobile block w-6 h-0.5 mb-0.5'></span>
				<span className='menuMobile block w-6 h-0.5 '></span>
			</button>

			{isMenuOpen && (
				<div className='absolute top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white p-5'>
					<div className='flex flex-col gap-4'>
						<NavLink to='/arquivo' className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
							{translation[lang].arquivo}
						</NavLink>
						<NavLink to='/sobre' className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
							{translation[lang].sobre}
						</NavLink>
						<button
							onClick={() => setShowNewsletter(true)}
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							NEWSLETTER
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
