import React from 'react';
import { Skeleton } from '@mui/material';

export function SkeletonArchive() {
	return (
		<div className='margin-general pt-[2rem] '>
			<div className='z-50 flex  w-full justify-between items-center '>
				<div className='flex gap-4 '>
					<Skeleton variant='rectangular' width={400} height={40} sx={{ bgcolor: 'grey.800', borderRadius: '20px' }} />
					<Skeleton variant='rectangular' width={200} height={40} sx={{ bgcolor: 'grey.800', borderRadius: '20px' }} />
					<Skeleton variant='rectangular' width={200} height={40} sx={{ bgcolor: 'grey.800', borderRadius: '20px' }} />
				</div>
				<div>
					<Skeleton variant='rectangular' width={60} height={40} sx={{ bgcolor: 'grey.800', borderRadius: '20px' }} />
				</div>
			</div>

			<div className='grid grid-cols-3 w-full gap-6 pt-6'>
				<Skeleton variant='rectangular' height={300} sx={{ bgcolor: 'grey.800', borderRadius: '20px', flexGrow: 1 }} />
				<Skeleton variant='rectangular' height={300} sx={{ bgcolor: 'grey.800', borderRadius: '20px', flexGrow: 1 }} />
				<Skeleton variant='rectangular' height={300} sx={{ bgcolor: 'grey.800', borderRadius: '20px', flexGrow: 1 }} />
				<Skeleton variant='rectangular' height={300} sx={{ bgcolor: 'grey.800', borderRadius: '20px', flexGrow: 1 }} />
				<Skeleton variant='rectangular' height={300} sx={{ bgcolor: 'grey.800', borderRadius: '20px', flexGrow: 1 }} />
				<Skeleton variant='rectangular' height={300} sx={{ bgcolor: 'grey.800', borderRadius: '20px', flexGrow: 1 }} />
			</div>
		</div>
	);
}
