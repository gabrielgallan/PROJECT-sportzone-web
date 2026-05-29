import { Star } from 'lucide-react'
import { useState } from 'react'

interface RatingStarsProps {
	value?: number
	onChange?: (value: number) => void
	readOnly?: boolean
}

export function RatingStars({ value = 0, onChange, readOnly = false }: RatingStarsProps) {
	const [hovered, setHovered] = useState<number>(0)

	const active = hovered || value

	return (
		<div className="flex items-center gap-1" onMouseLeave={() => setHovered(0)}>
			{Array.from({ length: 5 }).map((_, index) => {
				const filled = index < active

				return (
					<Star
						key={index}
						className={`transition-colors duration-100 ${
							readOnly ? 'size-4' : 'size-4 cursor-pointer'
						} ${filled ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
						onMouseEnter={() => !readOnly && setHovered(index + 1)}
						onClick={() => !readOnly && onChange?.(index + 1)}
					/>
				)
			})}
		</div>
	)
}
