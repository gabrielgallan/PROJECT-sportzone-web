import { ChevronLeft } from 'lucide-react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import type { BookingWithCourt } from '@/types/booking'

interface BookingDetailsHeaderProps {
	booking: BookingWithCourt
}

export function BookingDetailsHeader({ booking }: BookingDetailsHeaderProps) {
	return (
		<header className="flex justify-between items-start">
			<div className="space-y-1">
				<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Booking details</h1>

				<span className="text-sm md:text-base text-muted-foreground">
					View the details and status of your court reservation for {format(booking.startDate, 'dd MMM')}{' '}
					on {booking.court.name}
				</span>
			</div>

			<Link to="/my-bookings">
				<Button className="flex items-center justify-between py-4" variant="ghost">
					<ChevronLeft className="size-4" />
					Back
				</Button>
			</Link>
		</header>
	)
}
