import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	id: string;
	style?: string;
}

const Section = ({ children, id, style }: Props) => {
	return (
		<section
			id={id}
			className={`${
				id === 'contact' ? 'h-[50vh] bg-[#333131]' : 'min-h-screen'
			} w-screen overflow-x-hidden relative px-[8rem] py-[1rem] ${style}
			`}
		>
			{children}
		</section>
	);
};

export default Section;
