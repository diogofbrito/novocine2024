import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

export function SkeletonCarousel() {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		setTheme(currentTheme);
	}, []);

	return (
		<>
			<div className='grid grid-cols-5 w-full gap-6 iphone:hidden'>
				<Skeleton
					variant='rectangular'
					height={400}
					sx={{
						bgcolor: 'transparent',
						borderRadius: '20px',
						flexGrow: 1,
					}}
					className={`theme-skeleton`}
				/>
				<Skeleton
					variant='rectangular'
					height={400}
					sx={{
						bgcolor: 'transparent',
						borderRadius: '20px',
						flexGrow: 1,
					}}
					className={`theme-skeleton`}
				/>
				<Skeleton
					variant='rectangular'
					height={400}
					sx={{
						bgcolor: 'transparent',
						borderRadius: '20px',
						flexGrow: 1,
					}}
					className={`theme-skeleton`}
				/>
				<Skeleton
					variant='rectangular'
					height={400}
					sx={{
						bgcolor: 'transparent',
						borderRadius: '20px',
						flexGrow: 1,
					}}
					className={`theme-skeleton`}
				/>
				<Skeleton
					variant='rectangular'
					height={400}
					sx={{
						bgcolor: 'transparent',
						borderRadius: '20px',
						flexGrow: 1,
					}}
					className={`theme-skeleton`}
				/>
			</div>
		</>
	);
}
