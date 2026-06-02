import { Box } from 'lucide-react'
import { TrendingStatsIndicator } from '@/components/trend-stats-indicator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TotalCourtsAmountCard() {
	return (
		<Card className="gap-1 bg-transparent">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-medium text-muted-foreground">Total courts</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<Box className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-1">
				<span className="text-2xl font-bold tracking-tight">12</span>

				<TrendingStatsIndicator indicator={10} />
			</CardContent>
		</Card>
	)
}
