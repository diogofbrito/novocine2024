import React from 'react';
import Logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { Arquivo } from '../pages/Arquivo';
import { ThemeSwitch } from './ThemeSwitch';

export function NavBar() {
	return (
		<>
			<div className='sticky z-50 mr-14 ml-14 top-0 p-3 grid grid-cols-3 backdrop-blur navbar '>
				<div className='font-bold text-md flex flex-row gap-4 items-center '>
					<NavLink to='/Arquivo' className='link px-3 py-1 border rounded-full'>
						ARQUIVO
					</NavLink>
					<NavLink to='/Sobre' className='link px-3 py-1 border rounded-full'>
						SOBRE
					</NavLink>
					<div className='link px-3 py-1 border rounded-full '>NEWSLETTER</div>
				</div>
				<NavLink to='/' className='font-cine text-3xl  text-center'>
					NOVOCINE
				</NavLink>
				<div className='font-bold  text-xl flex items-center justify-end gap-4 '>
					<div className='px-3 py-1 border rounded-full'>EN</div>
					<ThemeSwitch />
				</div>
			</div>
		</>
	);
}
