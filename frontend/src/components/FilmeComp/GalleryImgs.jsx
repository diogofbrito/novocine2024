import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { urlFor } from '../../utils/imageUrlBuilder.js';

export function GalleryImgs({ value }) {
	const { imagens } = value;

	if (!imagens || imagens.length === 0) return null;

	return (
		<div className='relative w-full py-7 '>
			<Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: 6000, disableOnInteraction: false }} effect='fade' fadeEffect={{ crossFade: true }} loop={true} className='w-full h-full'>
				{imagens.map((img, index) => (
					<SwiperSlide key={index} className='w-full h-full'>
						<img src={urlFor(img).url()} alt={img.caption || `Imagem ${index + 1}`} className='w-full h-full object-cover rounded-[20px]' />
						{img.caption && <figcaption className='text-center text-sm pt-2'>{img.caption}</figcaption>}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
