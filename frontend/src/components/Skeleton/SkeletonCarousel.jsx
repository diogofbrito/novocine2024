import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

export function SkeletonArchiveMasonry() {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		setTheme(currentTheme);
	}, []);

	return (
		<>
			<div className='grid grid-cols-3 w-full gap-6 iphone:hidden'>
				<Skeleton
					variant='rectangular'
					height={500}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={500}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={500}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={500}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={500}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={500}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
			</div>

			<div className=' w-full hidden iphone:flex iphone:flex-col iphone:gap-6'>
				<Skeleton
					variant='rectangular'
					height={300}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={300}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
				<Skeleton
					variant='rectangular'
					height={300}
					sx={{
						bgcolor: theme === 'dark' ? 'grey.800' : 'rgb(254, 161, 208)',
						borderRadius: '20px',
						flexGrow: 1,
					}}
				/>
			</div>
		</>
	);
}
