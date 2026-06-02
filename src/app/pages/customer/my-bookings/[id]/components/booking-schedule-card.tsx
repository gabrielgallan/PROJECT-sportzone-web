import { format, formatDistanceToNow } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { BookingWithCourt } from '@/types/booking'

interface BookingScheduleCardProps {
	booking: BookingWithCourt
	intervalWithSeparator: string
}

export function BookingScheduleCard({ booking, intervalWithSeparator }: BookingScheduleCardProps) {
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardTitle className="text-base">Schedule information</CardTitle>
				<CardDescription>
					Your booking starts {formatDistanceToNow(booking.startDate, { addSuffix: true })}
				</CardDescription>
			</CardHeader>

			<CardContent className="grid gap-3 sm:grid-cols-2">
				<div className="flex items-center gap-3 rounded-lg bg-muted/80 dark:bg-muted/20 px-4 py-3">
					<div>
						<p className="text-muted-foreground text-xs">Date</p>
						<p className="font-mono text-sm font-medium">{format(booking.startDate, 'MMM dd, yyyy')}</p>
					</div>
				</div>

				<div className="flex items-center gap-3 rounded-lg bg-muted/80 dark:bg-muted/20 px-4 py-3">
					<div>
						<p className="text-muted-foreground text-xs">Time</p>
						<p className="font-mono text-sm font-medium">{intervalWithSeparator}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
