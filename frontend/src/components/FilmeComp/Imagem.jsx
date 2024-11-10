import React from 'react';
import { urlFor } from '../../utils/imageUrlBuilder';

export function Imagem({ value }) {
    return (
        
		<figure className='w-full '>
            <img src={urlFor(value.asset).url()} alt={value.caption} className='w-full h-full object-cover' />
            <figcaption className='text-right pb-7 text-base'>{value.caption}</figcaption>
		</figure>
	);
}
