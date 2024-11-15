import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { useTheme } from '../ThemeProvider';


export function SkeletonArchiveMasonry() {
    const { theme } = useTheme();

	

	return (
		<div key={theme}>
			<div className='grid grid-cols-3 w-full gap-6 iphone:hidden'>
				{[...Array(6)].map((_, index) => (
					<Skeleton
						key={index}
						variant='rectangular'
						height={500}
						sx={{
							bgcolor: theme === 'dark' ? '#000000' : 'rgb(254, 161, 208)',
							borderRadius: '20px',
							flexGrow: 1,
						}}
					/>
				))}
			</div>

			<div className='w-full hidden iphone:flex iphone:flex-col iphone:gap-6'>
				{[...Array(3)].map((_, index) => (
					<Skeleton
						key={index}
						variant='rectangular'
						height={300}
						sx={{
							bgcolor: theme === 'dark' ? '#000000' : 'rgb(254, 161, 208)',
							borderRadius: '20px',
							flexGrow: 1,
						}}
					/>
				))}
			</div>
		</div>
	);
}
