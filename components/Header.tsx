/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';

import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
// import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
	const [show, setShow] = useState<string>('h-[50px] md:h-[80px]');
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [categories, setCategories] = useState<any>(null);

	const { cartItems } = { cartItems: [] }; //useSelector((state: any) => state.cart);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				// setShow('-translate-y-[80px]');
				console.log('pase');
				setShow('-h-[20px]- opacity-70');
			} else {
				// setShow('shadow-sm');
				setShow('-h-[50px]-');
			}
		} else {
			// setShow('translate-y-0');
			setShow('h-[50px] md:h-[80px]');
			console.log('aqui');
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		const { data }: any = []; //await fetchDataFromApi("/api/categories?populate=*");
		setCategories(data);
	};

	return (
		<header
			//  bg-white
			className={`
				w-full flex items-center justify-between z-20  top-0 transition-transform duration-300 fixed menu ${show} 
			`}
		>
			<Wrapper className='h-[60px] flex justify-between items-center'>
				<Link href='/'>
					<img alt='logo' src='/logo.svg' className='w-[40px] md:w-[60px]' />
				</Link>

				<Menu />

				{mobileMenu && (
					<MenuMobile
						showCatMenu={showCatMenu}
						setShowCatMenu={setShowCatMenu}
						setMobileMenu={setMobileMenu}
						categories={categories}
					/>
				)}

				<div className='flex items-center gap-2 text-black'>
					{/* Icon start */}
					{/* <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
						<IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
						<div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
							51
						</div>
					</div> */}
					{/* Icon end */}

					{/* Icon start */}
					<Link href='/cart'>
						<div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
							<BsCart className='text-[15px] md:text-[20px]' />
							{cartItems.length > 0 && (
								<div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
									{cartItems.length}
								</div>
							)}
						</div>
					</Link>
					{/* Icon end */}

					{/* Mobile icon start */}
					<div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
						{mobileMenu ? (
							<VscChromeClose className='text-[16px]' onClick={() => setMobileMenu(false)} />
						) : (
							<BiMenuAltRight className='text-[20px]' onClick={() => setMobileMenu(true)} />
						)}
					</div>
					{/* Mobile icon end */}
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
