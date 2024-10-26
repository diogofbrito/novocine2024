import React from 'react';

export function BackgroundHomeCopy() {
	return (
		<>
			<div className='fixed w-full h-screen bg-cover bg-hero-home flex justify-center items-center -z-10 ' />

			<div />
			<div className='  w-full h-screen inset-0 flex flex-col gap-6 justify-center items-center -z-10 border border-white'>
				<div>
					<h1 className='text-9xl font-cine text-white'>ALBUFEIRA</h1>
					<p className='text-lg -mt-3 text-center  text-white'>
						um filme de <strong>António Macedo</strong>
					</p>
				</div>
				<button className='flex items-center justify-center space-x-2 border border-white rounded-full pl-3 pr-2 py-1 text-white hover:bg-gray-700 transition duration-300 ease-in-out '>
					<span className='font-bold'>PLAY</span>
					<span className='w-5 h-5'>
						<svg width='100%' height='100%' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM15.2566 11.1728C15.39 11.0958 15.39 10.9033 15.2566 10.8264L9.02232 7.22698C8.88899 7.15 8.72232 7.24623 8.72232 7.40019V14.599C8.72232 14.7529 8.88899 14.8491 9.02232 14.7722L15.2566 11.1728Z'
								fill='currentColor'
							></path>
						</svg>
					</span>
				</button>
			</div>
		</>
	);
}
