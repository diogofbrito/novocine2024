import React from 'react';
import { urlFor } from '../../utils/imageUrlBuilder';

export function ImagemEntrevista({ value }) {
    return (
        
		<figure className='w-full h-[300px]'>
            <img src={urlFor(value.asset).url()} alt={value.caption} className='w-full h-full object-cover' />
            <figcaption className='text-right pb-7'>{value.caption}</figcaption>
		</figure>
	);
}
