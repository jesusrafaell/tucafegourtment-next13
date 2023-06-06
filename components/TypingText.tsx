import { bgContainer, textContainer, textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';

interface Props {
	color: string;
	align: string;
	title: string;
	style?: string;
}

export const RunningText = ({ color, align, title }: Props) => {
	return (
		<motion.p
			variants={textContainer}
			initial='hidden'
			whileInView='show'
			className={`${
				color && align ? `text-[${color}] text-[${align}]` : 'text-center text-gray-500'
			} mt-10 font-semibold`}
		>
			{Array.from(title).map((letter, index) => (
				<motion.span key={index} variants={textVariant}>
					{letter}
				</motion.span>
			))}
		</motion.p>
	);
};

export const TitlePage = ({ title, color, align, style }: Props) => (
	<motion.h2
		variants={textVariant}
		initial='hidden'
		whileInView='show'
		transition={{ duration: 0.5 }}
		className={`${
			color && align ? `text-[${color}] text-[${align}]` : 'text-center text-gray-700'
		} text-4xl font-semibold mt-4 ${style}`}
	>
		{title}
	</motion.h2>
);

export const BgContent = () => {
	return (
		<motion.div
			variants={bgContainer}
			initial='hidden'
			whileInView='show'
			className='bg-about-content'
			transition={{ duration: 0.5 }}
		></motion.div>
	);
};

// 	initial={{ x: '100%' }}
// 	animate={{ x: 0 }}
// >
