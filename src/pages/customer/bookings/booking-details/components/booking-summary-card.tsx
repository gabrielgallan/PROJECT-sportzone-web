import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { BookingWithCourt } from '@/types/booking'

interface BookingSummaryCardProps {
	booking: BookingWithCourt
}

function formatCurrency(value: number) {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
	}).format(value / 100)
}

export function BookingSummaryCard({ booking }: BookingSummaryCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Payment details</CardTitle>
			</CardHeader>

			<CardContent className="grid gap-4">
				<div className="flex items-center justify-between text-sm">
					<span className="text-muted-foreground">Court price</span>
					<span>{formatCurrency(booking.court.pricePerHour)}</span>
				</div>

				<div className="flex items-center justify-between text-sm">
					<span className="text-muted-foreground">Total amount</span>
					<span>{formatCurrency(booking.amount)}</span>
				</div>

				<Separator />

				<div className="flex items-center justify-between font-semibold">
					<span>Total</span>
					<span>{formatCurrency(booking.amount)}</span>
				</div>
			</CardContent>
		</Card>
	)
}
