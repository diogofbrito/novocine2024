import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { X } from 'lucide-react';

export function Newsletter({ showNewsletter, setShowNewsletter }) {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

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
			const response = await axios.post('/api/subscribe', {
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
				setMessage('Erro ao se inscrever. Tente novamente mais tarde.bgd');
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
			{showNewsletter && (
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
			)}
		</>
	);
}
