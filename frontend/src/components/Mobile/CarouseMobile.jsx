import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function CarouselMobile({ images }) {
	return (
		<div className='flex flex-row justify-center items-center gap-5 h-full'>
			<div className='relative w-full  '>
				<Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: 6000, disableOnInteraction: false }} effect='fade' fadeEffect={{ crossFade: true }} loop={true} className='w-full h-full'>
					{images.map((image, index) => (
						<SwiperSlide className='w-full h-[full]'>
							<img src={image} key={index} className='w-full h-full object-cover rounded-[20px]' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
