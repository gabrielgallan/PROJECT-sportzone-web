import { Building2, Clock, MapPin } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { BookingStatusBadge } from './booking-status-badge'
import { Link } from 'react-router-dom'
import type { BookingWithCourt } from '@/types/booking'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'

interface BookingHistoryCardProps {
	booking: BookingWithCourt
}

export function BookingHistoryCard({ booking }: BookingHistoryCardProps) {
	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startTime,
		endDate: booking.endTime,
	})

	return (
		<Link to={`/bookings/${booking.id}`} className="block">
			<Card className="border hover:bg-muted/25 cursor-pointer transition-all duration-150 py-6">
				<CardContent className="flex gap-4">
					<div className="h-32 w-40 shrink-0 overflow-hidden rounded-md">
						<img
							src={booking.court.imageUrl}
							alt={booking.court.name}
							loading="lazy"
							className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
						/>
					</div>

					<div className="flex-1 space-y-4">
						<div className="flex items-start justify-between gap-4">
							<div className="space-y-2">
								<div>
									<span className="text-base font-semibold">{booking.court.name}</span>
								</div>

								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2 text-xs text-muted-foreground">
										<Building2 className="size-4" />
										<span>{booking.court.org}</span>
									</div>

									<div className="flex items-center gap-2 text-xs text-muted-foreground">
										<MapPin className="size-4" />
										<span>{booking.court.address}</span>
									</div>
								</div>
							</div>

							<BookingStatusBadge status={booking.status} />
						</div>

						<Separator />

						<div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Clock className="size-4" />
								<span>{intervalWithSeparator}</span>
							</div>

							<div className="flex items-center gap-2">
								<Label>Total amount:</Label>
								<span className="ml-auto font-semibold text-sm text-foreground">
									{(booking.amount / 100).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}
