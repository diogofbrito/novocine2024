import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { translation } from '../Lang/translation';
import { useLang } from '../components/LangProvider';

export function Newsletter({ showNewsletter, setShowNewsletter }) {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const { lang } = useLang();

	const handleSubscribe = async () => {
		if (!email) {
			setMessage(translation[lang].emailObrigatorio);
			return;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			setMessage(translation[lang].emailInvalido);
			return;
		}

		try {
			const response = await axios.post('/api/subscribe', {
				firstName,
				lastName,
				email,
			});

			setMessage(response.data.message || translation[lang].sucessoInscricao);
			setFirstName('');
			setLastName('');
			setEmail('');
		} catch (error) {
			if (error.response) {
				setMessage(error.response.data.message);
			} else {
				setMessage(translation[lang].erroInscricao);
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
				<>
					<div className='newsletter fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center dark:bg-[rgba(234,235,222,0.8)] backdrop-blur-2xl flex-col gap-4 iphone:px-[1.5rem] iphone:text-center '>
						<div className='text-xl leading-[1.688rem]   iphone:leading-[1.5rem]'>{translation[lang].subscrevaMensagem}</div>

						<div className='flex flex-row gap-4 iphone:flex-col iphone:items-center '>
							<input
								type='text'
								placeholder={translation[lang].placeholderPrimeiroNome}
								className='px-3 py-1 border rounded-full outline-none  bg-transparent input-placeholder '
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
							<input
								type='text'
								placeholder={translation[lang].placeholderUltimoNome}
								className='px-3 py-1 border rounded-full outline-none bg-transparent input-placeholder'
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>
							<div className='flex gap-4 pl-3 pr-2 py-1 border rounded-full '>
								<input
									type='email'
									placeholder={translation[lang].placeholderEmail}
									className='flex-grow border-none bg-transparent mr-2 outline-none text-base leading-none input-placeholder'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<button onClick={handleSubscribe} className='send'>
									<ArrowRight />
								</button>
							</div>
							<div className='fixed z-50 top-0 right-0 left-0 px-[4.5rem] iphone:px-[1rem] flex h-[4.5rem] justify-center items-center '>
								<button
									onClick={() => setShowNewsletter(false)}
									className='close uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out '
								>
									{translation[lang].fechar}
								</button>
							</div>
						</div>
						{message && <div>{message}</div>}
					</div>
				</>
			)}
		</>
	);
}
