import React from 'react';
			import ReactPlayer from 'react-player' 


export function Iframe({ value }) {
	return (
		<figure className='w-full'>
			<div className='aspect-video'>
				<ReactPlayer url={value.url} width={'100%'} height={'100%'} controls={true}  />
			</div>
			
			<figcaption className=' pb-7 text-base iphone:text-sm text-center'>{value.caption}</figcaption>
		</figure>
	);
}
