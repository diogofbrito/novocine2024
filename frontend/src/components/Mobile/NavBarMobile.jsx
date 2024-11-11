import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { Plus, Minus, Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export function NavBarMobile({ translation, useLang, setShowNewsletter, close }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { lang, toggleLang } = useLang();
	const { theme, toggleTheme } = useTheme();


	const toggleDrawer = open => () => {
		setIsMenuOpen(open);
	};

	return (
		<div className='hidden iphone:block relative text-end'>
			<button className='p-1.5 border  rounded-full buttonMobile' onClick={toggleDrawer(true)}>
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
						<button className='p-1.5 border rounded-full' onClick={toggleDrawer(close)}>
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
							<button
								onClick={() => {
									setShowNewsletter(true);
									toggleDrawer(false)(); 
								}}
								className='uppercase px-3 py-1 border rounded-full font-bold'
							>
								NEWSLETTER
							</button>
						</div>
					</div>

					<div className='flex justify-end gap-2'>
						<button className='px-3 py-2 border rounded-full ' onClick={toggleTheme} aria-label='Toggle theme'>
							{theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
						</button>
						<button onClick={toggleLang} className='px-3 py-1 border rounded-full font-bold'>
							{lang === 'PT' ? 'EN' : 'PT'}
						</button>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
