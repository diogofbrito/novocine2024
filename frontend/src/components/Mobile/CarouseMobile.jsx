import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function CarouselMobile({ images }) {
	return (
		<div className='hidden iphone:block h-full iphone:mb-5'>
			<div className='relative h-full '>
				<Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: 6000, disableOnInteraction: false }} effect='fade' fadeEffect={{ crossFade: true }} loop={true} className='w-full h-full'>
					{images.map((image, index) => (
						<SwiperSlide className='w-full h-[full]' key={index}>
							<img src={image} className='w-full h-full object-cover rounded-[40px]' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
