import React from 'react';

export function Links({ children, value }) {
	const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
	return (
		<a href={value.href} rel={rel} className='underline'>
			{children}
		</a>
	);
}
