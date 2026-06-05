import { motion } from 'motion/react'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

interface TextFlipProps {
	title: string
	words: string[]
	subtitle?: string
}

export default function TextFlip({ title, subtitle, words }: TextFlipProps) {
	return (
		<div>
			<motion.div className="flex flex-col items-center gap-2 text-center sm:mx-0 sm:mb-0 sm:flex-row">
				<LayoutTextFlip text={title} words={words} />
			</motion.div>
			{subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
		</div>
	)
}
