import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { Plus, Minus } from 'lucide-react';

export function NavBarMobile({ translation, useLang, setShowNewsletter }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { lang, toggleLang } = useLang();

	const toggleDrawer = open => () => {
		setIsMenuOpen(open);
	};

	return (
		<div className='iphone:block hidden relative'>
			<button className='px-3 py-2 border rounded-full buttonMobile' onClick={toggleDrawer(true)}>
				<Plus size={19} strokeWidth={2.5} />
			</button>

			<Drawer
				anchor='left'
				open={isMenuOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						width: '50vw',
						backgroundColor: 'var(--background-color-light)',
						color: 'var(--text-color-dark)',
						'&[data-theme="dark"]': {
							backgroundColor: 'var(--background-color-dark)',
							color: 'var(--text-color-light)',
						},
						paddingLeft: '1rem',
						paddingRight: '1rem',
						borderTopRightRadius: '40px',
						borderBottomRightRadius: '40px',
					},
				}}
			>
				<div className='flex flex-col justify-between h-full py-6 px-2 '>
					<div className='flex justify-end'>
						<button className='px-3 py-2 border rounded-full' onClick={toggleDrawer(close)}>
							<Minus size={19} strokeWidth={2.5} />
						</button>
					</div>

					<div className='flex flex-col justify-start gap-4  '>
						<div>
							<NavLink to='/' onClick={toggleDrawer(false)} className='uppercase px-3 py-1 border rounded-full font-bold'>
								home
							</NavLink>
						</div>
						<div>
							<NavLink to='/arquivo' onClick={toggleDrawer(false)} className='uppercase px-3 py-1 border rounded-full font-bold'>
								{translation[lang].arquivo}
							</NavLink>
						</div>
						<div>
							<NavLink to='/sobre' onClick={toggleDrawer(false)} className='uppercase px-3 py-1 border rounded-full font-bold'>
								{translation[lang].sobre}
							</NavLink>
						</div>
						<div>
							<button onClick={() => setShowNewsletter(true)} className='uppercase px-3 py-1 border rounded-full font-bold'>
								NEWSLETTER
							</button>
						</div>
					</div>

					<div className='flex justify-end'>
						<button onClick={toggleLang} className='px-3 py-1 border rounded-full font-bold'>
							{lang === 'PT' ? 'EN' : 'PT'}
						</button>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
