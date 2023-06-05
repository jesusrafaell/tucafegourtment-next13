import Image from 'next/image';
import { RunningText, TitlePage } from '@/components/TypingText';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
	return (
		<Section id='Shop' style='bg-black'>
			<div className='h-screen grid grid-cols-2 bg-black'>
				<h1 className='absolute top-10 left-10 text-6xl font-bold text-white opacity-10'>Shop1</h1>
				<div>
					<RunningText color='#7d7d7d' align='left' title='Shop' />
					<TitlePage title='Shop' color='#e8e8e8' align='left' />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
					<ProductCard url='/nescafe_sc_vanilla.png' />
					<ProductCard url='/nescafe_sc_vanilla.png' />
					<ProductCard url='/nescafe_sc_vanilla.png' />
					<ProductCard url='/nescafe_sc_vanilla.png' />
				</div>
			</div>
		</Section>
	);
};

export default Shop;
