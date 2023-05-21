import HeroBanner from '@/components/HeroBanner';
// import ProductCard from '@/components/ProductCard';
// import Section from '@/components/Section';

export default function Home({ products }: { products: any[] }) {
	return (
		<section id='Home' className='h-full w-screen overflow-x-hidden relative min-h-screen'>
			<main className='fontColor'>
				<HeroBanner />
				{/* <Wrapper> */}
				{/* heading and paragaph start */}
				{/* info */}
				{/* <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
				<div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
					Cushioning for Your Miles
				</div>
				<div className='text-md md:text-xl'>
					A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning
					during extended stretches of running.
				</div>
			</div> */}
				{/* heading and paragaph end */}
				{/* products grid start */}
				{/* products grid end */}
				{/* </Wrapper> */}
			</main>
		</section>
	);
}

export async function getStaticProps() {
	const products: any[] = []; //'await fetchDataFromApi("/api/products?populate=*");

	return {
		props: { products },
	};
}

/*
			<div
				className='
				grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
				gap-5 
				my-14 
				'
				style={{ padding: '100px' }}
			>
				{ {products?.data?.map((product) => (
						<ProductCard key={product?.id} data={product} />
					))} }
				<ProductCard url='/nescafe_sc_vanilla.png' />
				<ProductCard url='/nescafe_sc_vanilla.png' />
				<ProductCard url='/nescafe_sc_vanilla.png' />
				<ProductCard url='/nescafe_sc_vanilla.png' />
			</div>
			*/
