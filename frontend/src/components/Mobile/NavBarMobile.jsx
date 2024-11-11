import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function NavBarMobile({ translation, useLang, setShowNewsletter }) {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const { lang, toggleLang } = useLang();

	const toggleDrawer = open => () => {
		setIsMenuOpen(open);
	};

	return (
		<div className='iphone:block hidden relative'>
			<IconButton onClick={toggleDrawer(true)} sx={{  color: 'white', borderRadius: '50%' }}>
				<MenuIcon fontSize='large' />
			</IconButton>

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
				<div className='flex flex-col justify-between h-full py-6 px-2'>
				
					<div className='flex flex-col justify-center gap-4 '>
						<NavLink
							to='/arquivo'
							onClick={toggleDrawer(false)}
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							{translation[lang].arquivo}
						</NavLink>
						<NavLink
							to='/sobre'
							onClick={toggleDrawer(false)}
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							{translation[lang].sobre}
						</NavLink>
						<button
							onClick={() => setShowNewsletter(true)}
							className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							NEWSLETTER
						</button>
					</div>

					<div className='flex justify-end'>
						<button onClick={toggleLang} className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
							{lang === 'PT' ? 'EN' : 'PT'}
						</button>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
