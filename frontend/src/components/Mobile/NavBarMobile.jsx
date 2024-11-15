import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { Moon, Sun, AlignJustify } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export function NavBarMobile({ translation, useLang, setShowNewsletter, close }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { lang, toggleLang } = useLang();
	const { theme, toggleTheme } = useTheme();


	const toggleDrawer = open => () => {
		setIsMenuOpen(open);
	};

	return (
		<div className='hidden iphone:block relative justify-self-end'>
			<button
				className=' uppercase  p-2 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out '
				onClick={toggleDrawer(true)}
			>
				<AlignJustify size={20} />
			</button>

			<Drawer
				key={theme}
				anchor='left'
				open={isMenuOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						width: '50vw',
						backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
						color: theme === 'dark' ? 'var(--text-color-light)' : 'var(--text-color-dark)',
						paddingLeft: '1rem',
						paddingRight: '1rem',
						borderTopRightRadius: '40px',
						borderBottomRightRadius: '40px',
					},
				}}
			>
				<div className='flex flex-col justify-between h-full py-6 px-2 '>
					<div className='flex justify-end'>
						<button
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out '
							onClick={toggleDrawer(close)}
						>
							{translation[lang].fechar}
						</button>
					</div>

					<div className='flex flex-col justify-start gap-4  '>
						<div>
							<NavLink to='/' onClick={toggleDrawer(false)} className='uppercase px-3 py-1 border rounded-full '>
								home
							</NavLink>
						</div>
						<div>
							<NavLink to='/arquivo' onClick={toggleDrawer(false)} className='uppercase px-3 py-1 border rounded-full '>
								{translation[lang].arquivo}
							</NavLink>
						</div>
						<div>
							<NavLink to='/sobre' onClick={toggleDrawer(false)} className='uppercase px-3 py-1 border rounded-full '>
								{translation[lang].sobre}
							</NavLink>
						</div>
						<div>
							<button
								onClick={() => {
									setShowNewsletter(true);
									toggleDrawer(false)();
								}}
								className='uppercase px-3 py-1 border rounded-full '
							>
								NEWSLETTER
							</button>
						</div>
					</div>

					<div className='flex justify-end gap-2'>
						<button className='px-3 py-2 border rounded-full ' onClick={toggleTheme} aria-label='Toggle theme'>
							{theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
						</button>
						<button onClick={toggleLang} className='px-3 py-1 border rounded-full '>
							{lang === 'PT' ? 'EN' : 'PT'}
						</button>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
