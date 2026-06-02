import { Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BookingStatusBadge } from '@/components/booking-status-badge'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import type { BookingWithCourt } from '@/types/booking'
import { Card, CardContent } from '@/components/ui/card'

interface BookingHistoryCardProps {
	booking: BookingWithCourt
}

export function BookingHistoryCard({ booking }: BookingHistoryCardProps) {
	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startDate,
		endDate: booking.endDate,
	})

	const formattedAmount = (booking.amount / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	})

	return (
		<Link to={`/my-bookings/${booking.id}`} className="group block">
			<Card
				className="
    py-0
    gap-0
    grid grid-cols-1 md:grid-cols-[120px_1fr]
    transition-all
    cursor-pointer
    hover:bg-muted/10
  "
			>
				{/* Image */}
				<div className="h-40 md:h-full overflow-hidden rounded-t-xl md:rounded-none md:rounded-l-xl">
					<img
						src={booking.court.imageUrl}
						alt={booking.court.name}
						loading="lazy"
						className="h-full w-full object-cover"
					/>
				</div>

				{/* Content */}
				<CardContent className="flex flex-col px-5 py-4 gap-2 md:gap-0">
					{/* Top row: name + badge */}
					<div className="flex justify-between">
						<div className="space-y-1">
							<h1 className="group-hover:text-primary text-base font-medium leading-tight">
								{booking.court.name}
							</h1>
							<div className="flex flex-col gap-1">
								<span className="text-xs text-muted-foreground">{booking.court.org.name}</span>
								<span className="mt-2 flex items-center gap-2 text-xs md:text-sm">
									<MapPin className="size-4" />
									{booking.court.address}
								</span>
							</div>
						</div>

						<div className="hidden md:flex">
							<BookingStatusBadge status={booking.status} />
						</div>
					</div>

					{/* Bottom row: time + amount */}
					<div className="flex items-end justify-between">
						<div className="flex items-center gap-2 text-primary bg-muted/40 px-2.5 py-1 rounded-md font-mono text-xs font-medium">
							<Clock className="size-3.5" />
							<span>{intervalWithSeparator}</span>
						</div>

						<div className="text-right">
							<p className="hidden md:grid text-xs text-muted-foreground">Total</p>
							<span className="text-base font-medium">{formattedAmount}</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}
