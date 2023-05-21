interface MenuItem {
	id: number;
	name: string;
	url: string;
	subMenu?: boolean;
}

const listMenu: MenuItem[] = [
	{ id: 1, name: 'Home', url: '/' },
	{ id: 2, name: 'About', url: '/about' },
	{ id: 3, name: 'Shop', url: '/shop' },
	{ id: 4, name: 'Contact', url: '/contact' },
];
export default listMenu;
