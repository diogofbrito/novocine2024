import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Arquivo } from '../pages/Arquivo';
import { ThemeSwitch } from './ThemeSwitch';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function NavBar() {
	const navbarRef = useRef(null);

	 useEffect(() => {
			const navbar = navbarRef.current;

			ScrollTrigger.create({
				trigger: navbar,
				start: '50px top', 
				end: 'bottom top',
				onUpdate: self => {
					if (self.direction === 1) {
						gsap.to(navbar, { y: -navbar.offsetHeight, duration: 0.4, ease: 'power1.out' });
					} else if (self.direction === -1) {
						gsap.to(navbar, { y: 0, duration: 0.4, ease: 'power1.out' });
					}
				},
			});

			return () => {
				ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			};
		}, []);

	return (
		<>
			<div className='fixed z-50 top-0 px-[4.5rem] flex w-screen h-[4.5rem] items-center ' ref={navbarRef}>
				<div className='grid grid-cols-3 w-full '>
					<div className='font-bold text-md flex flex-row gap-4 items-center '>
						<NavLink to='/Arquivo' className='link px-3 py-1 border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>
							ARQUIVO
						</NavLink>
						<NavLink to='/Sobre' className='link px-3 py-1 border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>
							SOBRE
						</NavLink>
						<button className='link px-3 py-1 border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '>NEWSLETTER</button>
					</div>
					<NavLink to='/' className='font-cine text-4xl flex justify-center items-center '>
						NOVOCINE
					</NavLink>
					<div className='font-bold flex items-center justify-end gap-4 '>
						<div className='px-3 py-1 border rounded-full hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out'>EN</div>
						<ThemeSwitch />
					</div>
				</div>
			</div>
		</>
	);
}
