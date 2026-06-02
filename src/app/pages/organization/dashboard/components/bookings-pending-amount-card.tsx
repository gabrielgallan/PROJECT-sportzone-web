import { MessageCircleWarning } from 'lucide-react'
import { TrendingStatsIndicator } from '@/components/trend-stats-indicator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface BookingsPendingAmountCardProps {
	data: {
		amount: number
		indicator: number
	}
}

export function BookingsPendingAmountCard({ data }: BookingsPendingAmountCardProps) {
	return (
		<Card className="gap-4">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-semibold">Pending confirmation</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<MessageCircleWarning className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<span className="text-2xl font-bold tracking-tight">{data.amount}</span>
				<p className="text-xs text-muted-foreground">
					Bookings that still need operational review.
				</p>

				<TrendingStatsIndicator invert indicator={data.indicator} />
			</CardContent>
		</Card>
	)
}
