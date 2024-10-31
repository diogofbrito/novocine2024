import React from 'react';


export function ContentBlock ({ children, bgColor, text }) {
	return (
		<>
			<section className={`content-block flex ${bgColor} justify-between  rounded-[50px] border border-white `}>
				<div className={` ${text} p-10  w-[100%] gap-6`}>{children}</div>
			</section>
		</>
	);
}
