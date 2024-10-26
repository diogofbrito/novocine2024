import React from 'react';


export function ContentBlock ({ children, bgColor, text }) {
	return (
		<>
			<section className={`content-block flex ${bgColor} justify-between margin-general rounded-[50px] border border-white `}>
				<div className={` ${text} p-8  w-[100%] gap-6`}>{children}</div>
			</section>
		</>
	);
}
