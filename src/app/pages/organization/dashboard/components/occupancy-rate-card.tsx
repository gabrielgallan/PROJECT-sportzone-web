import { Calendar } from 'lucide-react'
import { TrendingStatsIndicator } from '@/components/trend-stats-indicator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface OccupancyRateCardProps {
	data: {
		percentual: number
		indicator: number
	}
}

export function OccupancyRateCard({ data }: OccupancyRateCardProps) {
	return (
		<Card className="gap-4">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-semibold">Occupancy rate</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<Calendar className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<span className="text-2xl font-bold tracking-tight">
					{data.percentual.toLocaleString('en-US', { style: 'percent', maximumFractionDigits: 1 })}
				</span>
				<p className="text-xs text-muted-foreground">Average court usage in the selected period.</p>

				<TrendingStatsIndicator indicator={data.indicator} />
			</CardContent>
		</Card>
	)
}
