import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { X } from 'lucide-react';
import { ThemeSwitch } from './ThemeSwitch';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

export function NavBar() {
	const navbarRef = useRef(null);
	const [showNewsletter, setShowNewsletter] = useState(false);
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');



	useEffect(() => {
		const navbar = navbarRef.current;

		ScrollTrigger.create({
			trigger: navbar,
			start: '30px top',
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

	const handleSubscribe = async () => {
		if (!email) {
			setMessage('Email é obrigatório!');
			return;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			setMessage('Por favor, forneça um email válido.');
			return;
		}

		try {
			const response = await axios.post('http://localhost:5001/api/subscribe', {
				firstName,
				lastName,
				email,
			});

			setMessage(response.data.message);
			setFirstName('');
			setLastName('');
			setEmail('');
		} catch (error) {
			if (error.response) {
				setMessage(error.response.data.message);
			} else {
				setMessage('Erro ao se inscrever. Tente novamente mais tarde, bgd');
			}
		}
	};

	const handleCloseNewsletter = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setMessage('');
		setShowNewsletter(false);
	};


	return (
		<>
			<div className='fixed z-50 top-0 px-[4.5rem] flex w-screen h-[4.5rem] items-center ' ref={navbarRef}>
				<div className='grid grid-cols-3 w-full '>
					<div className='font-bold text-md flex flex-row gap-4 items-center '>
						<NavLink to='/Arquivo' className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
							ARQUIVO
						</NavLink>
						<NavLink to='/Sobre' className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
							SOBRE
						</NavLink>
						<button
							onClick={() => setShowNewsletter(true)}
							className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
						>
							NEWSLETTER
						</button>
					</div>
					<NavLink to='/' className='font-cine text-4xl flex justify-center items-center '>
						NOVOCINE
					</NavLink>
					<div className='font-bold flex items-center justify-end gap-4 '>
						<div className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>EN</div>
						<ThemeSwitch />
					</div>
				</div>
			</div>
			<AnimatePresence mode='wait'>
				{showNewsletter && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
						<div className='newsletter fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center  dark:bg-[rgba(234,235,222,0.8)] backdrop-blur-2xl flex-col gap-4'>
							<div>Subscreve a nossa newsletter para acompanhares todas as novidades.</div>
							<div className='flex flex-row gap-4 '>
								<input
									type='text'
									placeholder='Primeiro Nome'
									className='px-3 py-1 border rounded-full outline-none  bg-transparent input-placeholder'
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
								/>
								<input
									type='text'
									placeholder='Último Nome'
									className='px-3 py-1 border rounded-full outline-none bg-transparent input-placeholder'
									value={lastName}
									onChange={e => setLastName(e.target.value)}
								/>
								<div className='flex gap-4 pl-3 pr-2 py-1 border rounded-full '>
									<input
										type='email'
										placeholder='Email *'
										className='flex-grow border-none bg-transparent mr-2 outline-none text-base leading-none input-placeholder'
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
									<button onClick={handleSubscribe} className='send'>
										<ArrowRight />
									</button>
								</div>
								<button
									onClick={() => setShowNewsletter(false)}
									className='close gap-4 p-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out cursor-pointer'
								>
									<X />
								</button>
							</div>
							{message && <div>{message}</div>}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
