import { CircleDollarSign } from 'lucide-react'
import { TrendingStatsIndicator } from '@/components/trend-stats-indicator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface RevenueCardProps {
	data: {
		receipt: number
		indicator: number
	}
}

export function RevenueCard({ data }: RevenueCardProps) {
	return (
		<Card className="gap-4">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-semibold">Revenue</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<CircleDollarSign className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<span className="text-2xl font-bold tracking-tight">
					{(data.receipt / 100).toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</span>
				<p className="text-xs text-muted-foreground">Gross revenue for the selected period.</p>

				<TrendingStatsIndicator message indicator={data.indicator} />
			</CardContent>
		</Card>
	)
}
