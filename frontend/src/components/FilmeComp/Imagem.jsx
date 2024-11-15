import React from 'react';
import { urlFor } from '../../utils/imageUrlBuilder';

export function Imagem({ value }) {
    return (
			<figure className='w-full py-7'>
				<img src={urlFor(value.asset).url()} alt={value.caption} className='w-full h-full object-cover rounded-[20px]' />
				<figcaption className='text-center text-base iphone:text-sm '>{value.caption}</figcaption>
			</figure>
		);
}
