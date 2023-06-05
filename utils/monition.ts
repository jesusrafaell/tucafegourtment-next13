export const textContainer = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

export const textVariant = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeIn',
		},
	},
};

export const bgContainer = {
	hidden: {
		opacity: 1,
		x: '90%',
	},
	show: {
		opacity: 1,
		x: '0',
		transition: {
			ease: 'easeIn',
		},
	},
};
