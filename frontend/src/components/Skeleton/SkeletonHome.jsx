import React from 'react';
import { Skeleton } from '@mui/material';

export function SkeletonHome() {
	return (
		<div className=''>
			<Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800', borderRadius: '50px', height: '100%' }} />
		</div>
	);
}
