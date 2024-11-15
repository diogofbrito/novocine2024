import React from 'react';
import { urlFor } from '../../utils/imageUrlBuilder';

export function ImagemExtras({ value }) {
	return (
		<figure className='w-full flex  flex-col items-center'>
			<img src={urlFor(value.asset).url()} alt={value.caption} className='w-2/3 h-full object-cover iphone:w-full' />
			<figcaption className='text-center text-base iphone:text-sm '>{value.caption}</figcaption>
		</figure>
	);
}
