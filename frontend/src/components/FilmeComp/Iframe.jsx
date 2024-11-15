import React from 'react';
import ReactPlayer from 'react-player';

export function Iframe({ value }) {
	return (
		<div className='w-full py-7 iphone:py-0'>
			{/* <div className='aspect-video'>
				<ReactPlayer url={value.url} width={'100%'} height={'100%'} controls={true} />
			</div> */}

				<iframe src={value.url} width='100%' height='400px' allowFullScreen></iframe>
			
			<figcaption className='text-base iphone:text-sm text-center'>{value.caption}</figcaption>
		</div>
	);
}
