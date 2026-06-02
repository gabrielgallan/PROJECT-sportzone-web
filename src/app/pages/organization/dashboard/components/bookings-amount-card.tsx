import { Calendar } from 'lucide-react'
import { TrendingStatsIndicator } from '@/components/trend-stats-indicator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface BookingsAmountCardProps {
	data: {
		amount: number
		indicator: number
	}
}

export function BookingsAmountCard({ data }: BookingsAmountCardProps) {
	return (
		<Card className="gap-4">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-semibold">Bookings amount</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<Calendar className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<span className="text-2xl font-bold tracking-tight">{data.amount}</span>
				<p className="text-xs text-muted-foreground">Reservations scheduled for the current day.</p>

				<TrendingStatsIndicator message indicator={data.indicator} />
			</CardContent>
		</Card>
	)
}
