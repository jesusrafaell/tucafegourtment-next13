import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
	url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ url }) => {
	const original_price = 100;
	const original = 50;

	return (
		<Link
			// href={`/product/${p.slug}`}
			href={`#`}
			className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
		>
			<Image width={500} height={500} src={url} alt={'Producto'} />
			<div className='p-4 text-black/[0.9]'>
				<h2 className='text-lg font-medium'>{'Producto'}</h2>
				<div className='flex items-center text-black/[0.5]'>
					<p className='mr-2 text-lg font-semibold'>&#8377;{'100'}</p>

					{original_price && (
						<>
							<p className='text-base  font-medium line-through'>&#8377;{original_price}</p>
							<p className='ml-auto text-base font-medium text-green-500'></p>
						</>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
