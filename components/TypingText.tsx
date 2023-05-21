import { textContainer, textVariant } from '@/utils/monition';
import { motion } from 'framer-motion';

interface Props {
	color: string;
	align: string;
	title: string;
}

export const RunningText = ({ color, align }: Props) => {
	return (
		<motion.p
			variants={textContainer}
			initial='hidden'
			whileInView='show'
			className={`${
				color && align ? `text-[${color}] text-[${align}]` : 'text-center text-gray-500'
			} mt-10 font-semibold`}
		>
			{Array.from('| FreshCoffee').map((letter, index) => (
				<motion.span key={index} variants={textVariant}>
					{letter}
				</motion.span>
			))}
		</motion.p>
	);
};

export const TitlePage = ({ title, color, align }: Props) => {
	return (
		<motion.h2
			variants={textVariant}
			initial='hidden'
			whileInView='show'
			className={`${
				color && align ? `text-[${color}] text-[${align}]` : 'text-center text-gray-700'
			} text-4xl font-semibold mt-4`}
		>
			{title}
		</motion.h2>
	);
};
