import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export const LayoutTextFlip = ({
	text = 'Build Amazing',
	words = ['Landing Pages', 'Component Blocks', 'Page Sections', '3D Shaders'],
	duration = 3000,
}: {
	text: string
	words: string[]
	duration?: number
}) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
		}, duration)

		return () => clearInterval(interval)
	}, [duration, words.length])

	return (
		<>
			<motion.span
				layoutId="subtext"
				className="text-lg font-semibold tracking-tight drop-shadow-lg md:text-xl"
			>
				{text}
			</motion.span>

			<motion.span layout className="relative inline-block overflow-hidden">
				<AnimatePresence mode="popLayout">
					<motion.span
						key={currentIndex}
						initial={{ y: -40, filter: 'blur(10px)' }}
						animate={{
							y: 0,
							filter: 'blur(0px)',
						}}
						exit={{
							y: 40,
							filter: 'blur(10px)',
							opacity: 0,
						}}
						transition={{
							duration: 0.5,
						}}
						className="inline-block text-primary text-lg md:text-xl font-semibold"
					>
						{words[currentIndex]}
					</motion.span>
				</AnimatePresence>
			</motion.span>
		</>
	)
}
