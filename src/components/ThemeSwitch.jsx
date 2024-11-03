import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeSwitch() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useState(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<button className='px-3 py-2 border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out' onClick={toggleTheme} aria-label='Toggle theme'>
			{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
		</button>
	);
}
