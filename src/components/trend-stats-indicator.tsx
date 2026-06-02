import { Minus, TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const trendIconMap = {
	up: TrendingUp,
	down: TrendingDown,
	neutral: Minus,
}

const trendClassMap = {
	up: 'text-primary',
	down: 'text-rose-500',
	neutral: 'text-muted-foreground',
}

const trendMessageMap = {
	up: 'Looking good',
	down: 'Needs attention',
	neutral: 'Stable',
}

type TrendDirection = 'up' | 'down' | 'neutral'

interface TrendingStatsIndicatorProps {
	indicator: number
	message?: boolean
	invert?: boolean
}

export function TrendingStatsIndicator({
	indicator,
	message = false,
	invert = false,
}: TrendingStatsIndicatorProps) {
	const rawDirection: TrendDirection = indicator > 0 ? 'up' : indicator < 0 ? 'down' : 'neutral'

	const trendDirection: TrendDirection =
		invert && rawDirection !== 'neutral' ? (rawDirection === 'up' ? 'down' : 'up') : rawDirection

	const TrendIcon = trendIconMap[rawDirection]

	const formattedDiff = new Intl.NumberFormat('en-US', {
		style: 'percent',
		signDisplay: 'exceptZero',
		maximumFractionDigits: 1,
	}).format(indicator / 100)

	return (
		<div className="flex flex-col gap-1">
			<div
				className={cn('flex items-center gap-1 text-xs font-medium', trendClassMap[trendDirection])}
			>
				<TrendIcon className="size-3.5" />
				<span>{message ? trendMessageMap[trendDirection] : formattedDiff}</span>
			</div>
		</div>
	)
}
