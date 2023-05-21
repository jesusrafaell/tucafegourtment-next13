import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BsChevronDown } from 'react-icons/bs';

interface MenuItem {
	id: number;
	name: string;
	url?: string;
	subMenu?: boolean;
}

interface Category {
	attributes: {
		name: string;
		slug: string;
		products: {
			data: {
				id: number;
				name: string;
				slug: string;
			}[];
		};
	};
	id: number;
}

interface Props {
	showCatMenu: boolean;
	setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
	setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
	categories: Category[];
}

const data: MenuItem[] = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '/about' },
	{ id: 3, name: 'Categories', subMenu: true },
	{ id: 4, name: 'Contact', url: '/contact' },
];

const subMenuData = [
	{ id: 1, name: 'Jordan', doc_count: 11 },
	{ id: 2, name: 'Sneakers', doc_count: 8 },
	{ id: 3, name: 'Running shoes', doc_count: 64 },
	{ id: 4, name: 'Football shoes', doc_count: 107 },
];

const MenuMobile: React.FC<Props> = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) => {
	return (
		<ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
			{data.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<li className='py-4 px-5 border-b cursor-pointer'>
							<Link to={item.name} smooth offset={0} duration={500} onClick={() => setMobileMenu(false)}>
								{item.name}
							</Link>
						</li>
					</React.Fragment>
				);
			})}
		</ul>
	);
};

export default MenuMobile;
