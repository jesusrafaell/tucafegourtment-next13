/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';

const HeroBanner = (): JSX.Element => {
	const button_Carousel =
		'px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white opacity-40 absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90';

	return (
		<div
			className='
			relative
			text-white 
			text-[20px]
			w-full 
			imax-w-[1360px]
			mx-auto
			'
		>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showThumbs={false}
				className='h-screen'
				showIndicators={false}
				showStatus={false}
				renderArrowPrev={(clickHandler, hasPrev) => (
					<div
						onClick={clickHandler}
						className='absolute right-[41px] md:right-[81px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
					>
						<BiArrowBack className='text-sm md:text-lg' />
					</div>
				)}
				renderArrowNext={(clickHandler, hasNext) => (
					<div
						onClick={clickHandler}
						className='absolute right-10 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
					>
						<BiArrowBack className='rotate-180 text-sm md:text-lg' />
					</div>
				)}
			>
				<div>
					<img src='/image/coffee-shop.jpg' className='aspect-[16/10] md:aspect-auto object-cover max-h-screen' />
					<div className={button_Carousel}>Shop now</div>
				</div>

				<div>
					<img src='/image/coffee-shop2.jpg' className='aspect-[16/10] md:aspect-auto object-cover max-h-screen' />
					<div className={button_Carousel}>Shop now</div>
				</div>
				{/* 
				<div>
					<img src='/slide-2.png' className='aspect-[16/10] md:aspect-auto object-cover' />
					<div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
						Shop now
					</div>
				</div>

				<div>
					<img src='/slide-3.png' className='aspect-[16/10] md:aspect-auto object-cover' />
					<div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
						Shop now
					</div>
				</div> */}
			</Carousel>
		</div>
	);
};

export default HeroBanner;
