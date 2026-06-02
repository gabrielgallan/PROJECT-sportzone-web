import { Power } from 'lucide-react'
import { TrendingStatsIndicator } from '@/components/trend-stats-indicator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function OnlineCourtsAmountCard() {
	return (
		<Card className="gap-1 bg-transparent">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-medium text-muted-foreground">Online</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<Power className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-1">
				<span className="text-2xl font-bold tracking-tight">9</span>

				<TrendingStatsIndicator message indicator={0} />
			</CardContent>
		</Card>
	)
}
