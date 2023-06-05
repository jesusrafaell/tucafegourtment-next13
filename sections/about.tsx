import Image from 'next/image';
import { BgContent, RunningText, TitlePage } from '@/components/TypingText';
import Section from '@/components/Section';
import { useState } from 'react';

const About = () => {
	const [aqui, setAqui] = useState(false);
	console.log(aqui);
	return (
		<Section id='About' style='m-about'>
			{/* <div className='h-screen grid grid-cols-2'> */}
			{/* fondo del contenido */}
			<div className='h-screen grid-about-gap'>
				{/* Columna 1 */}
				<div className='flex justify-center items-center'>
					<Image
						src='/image/coffee-shop.jpg'
						alt='coffee-shop'
						width={350}
						height={500}
						style={{
							borderRadius: '1rem',
						}}
					/>
				</div>

				{/* bg del contenido */}
				<BgContent />

				{/* Contenido de la columna 2 */}
				<div className='z-50 py-8 px-10 relative flex justify-start items-center'>
					<h1 className='absolute  text-6xl font-bold text-[#e8e8e8] opacity-10 title-about'>Tu cafe Gourmet</h1>
					<div>
						<RunningText color='#7d7d7d' align='left' title='' />
						<TitlePage title='Our me' color='#fff' style='title-page-about' align='left' />
						<div className='mt-8 text-[#e8e8e8] text-lg font-regular text-justify justify-center items-center flex content-about'>
							<p className='opacity-90'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;
