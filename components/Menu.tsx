import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-scroll';
import listMenu from './listNav';

interface Category {
	attributes: {
		name: string;
		slug: string;
		products: {
			data: any[];
		};
	};
	id: number;
}

const Menu: React.FC = () => {
	// listMenu.map((item) => console.log(item.id, item.name));

	return (
		<ul className='hidden md:flex items-center gap-8 font-bold text-[#804000]'>
			{listMenu.map((item) => {
				return (
					<li key={item.id} className='cursor-pointer hover:underline'>
						<Link to={item.name} smooth offset={0} duration={500}>
							{item.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Menu;
