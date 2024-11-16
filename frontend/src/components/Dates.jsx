import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';




export function Dates() {


	return (
		<div className='fixed z-50 bottom-0 px-[4.5rem] iphone:px-[1rem] flex w-screen h-[4.5rem] items-center  '>
			<div className='uppercase px-3 py-1 border rounded-full w-full dates '>
				<Marquee pauseOnHover speed={50} gradient={true} gradientWidth={100} gradientColor={'var(--background-color-light)'} direction='right'>
					DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE
					DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;DE 20 SETEMBRO A 31 DE
					DEZEMBRO&nbsp;&nbsp;&#x25cf;&nbsp;&nbsp;
				</Marquee>
			</div>
		</div>
	);
}
