import { Link } from  'react-router-dom';;
import React from 'react';

export function Arquivo() {

	return (
		<div className='mt-12 mx-12 grid grid-cols-3 gap-12'>
			<article className=''>
				<Link to=''>
					<div className=' '>
						<h1 className='font-cine text-5xl pl-2 '> MAIORIA ABSOLUTA</h1>
						<img src='/imgs/1.png' className='rounded-[25px] py-2'></img>
						<div className='flex flex-row justify-between'>
							de António Macedo 68 29min
							<button className='flex items-center justify-center space-x-2 border border-white rounded-full px-3 py-1 text-white hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '>
								<span className='font-bold'>MAIS INFO</span>
							</button>
						</div>
					</div>
				</Link>
			</article>
			<article className=''>
				<Link to=''>
					<div className=' '>
						<h1 className='font-cine text-5xl pl-2 '> ALBUFEIRA</h1>
						<img src='/imgs/1.png' className='rounded-[25px] py-2'></img>
						<div className='flex flex-row justify-between'>
							de António Macedo 68 29min
							<button className='flex items-center justify-center space-x-2 border border-white rounded-full px-3 py-1 text-white hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '>
								<span className='font-bold'>MAIS INFO</span>
							</button>
						</div>
					</div>
				</Link>
			</article>
			<article className=''>
				<Link to=''>
					<div className=' '>
						<h1 className='font-cine text-5xl pl-2 '> A CASA E OS CAES</h1>
						<img src='/imgs/1.png' className='rounded-[25px] py-2'></img>
						<div className='flex flex-row justify-between'>
							de António Macedo 68 29min
							<button className='flex items-center justify-center space-x-2 border border-white rounded-full px-3 py-1 text-white hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '>
								<span className='font-bold'>MAIS INFO</span>
							</button>
						</div>
					</div>
				</Link>
			</article>
		</div>
	);
}
