import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function Intro() {
	const comp = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline();
			t1.from(['#intro__slider1'], {
				xPercent: '-1',
				duration: 3,
				delay: 0.3,
			})
				.from(['#title_1'], {
					opacity: 1,
					y: '+=0',
					stagger: 0.5,
				})
				.to(['#title_1'], {
					opacity: 0,
					y: '-=30',
					delay: 0.7,
					stagger: 1.0,
					duration: 0.1,
				})
				.to(['#intro__slider1'], {
					xPercent: '-100',
					duration: 1.3,
				});
			const t2 = gsap.timeline();
			t2.from(['#intro__slider2'], {
				xPercent: '0',
				duration: 3,
				delay: 0.3,
			})
				.from(['#title_2'], {
					opacity: 1,
					y: '+=0',
					stagger: 0.5,
				})
				.to(['#title_2'], {
					opacity: 0,
					y: '-=30',
					delay: 0.7,
					stagger: 1.0,
					duration: 0.1,
				})
				.to(['#intro__slider2'], {
					xPercent: '100',
					duration: 1.3,
				});
		}, comp);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div className='introPage' ref={comp}>
				<div id='intro__slider1' className='fixed flex justify-end bg-[--background-color-light] w-1/2 top-0 bottom-0 left-0 z-[999]'>
					<div id='title_1' className=' text-[28vh] font-cine grid grid-cols-1 grid-rows-4 h-[100%] leading-none'>
						<span>N</span>
						<span>O</span>
						<span>V</span>
						<span>0</span>
					</div>
				</div>
				<div id='intro__slider2' className='fixed flex justify-start  w-1/2 bg-[--background-color-light] top-0 bottom-0 right-0 z-[999]'>
					<div id='title_2' className=' text-[28vh] font-cine grid grid-cols-1 grid-rows-4 h-[100%] leading-none pl-2 text-center'>
						<span>C</span>
						<span>I</span>
						<span>N</span>
						<span>E</span>
					</div>
				</div>
			</div>
		</>
	);
}
