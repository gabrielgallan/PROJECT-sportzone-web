import { ArrowRight, CalendarDays } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { BookingStatusBadge } from '../bookings/booking-status-badge'
import { formatDistanceToNowStrict } from 'date-fns'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import { cn } from '@/lib/utils'
import type { BookingWithCourt } from '@/types/booking'

const weekDays = [
	{
		label: 'Mon',
		day: 26,
		hasBooking: false,
	},
	{
		label: 'Tue',
		day: 27,
		hasBooking: true,
	},
	{
		label: 'Wed',
		day: 28,
		hasBooking: false,
	},
	{
		label: 'Thu',
		day: 29,
		hasBooking: true,
	},
	{
		label: 'Fri',
		day: 30,
		hasBooking: true,
	},
	{
		label: 'Sat',
		day: 31,
		hasBooking: true,
	},
	{
		label: 'Sun',
		day: 1,
		hasBooking: false,
	},
]

interface UpcomingBookingCardProps {
	booking: BookingWithCourt
}

function UpcomingBookingCard({ booking }: UpcomingBookingCardProps) {
	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startDate,
		endDate: booking.endDate,
	})

	return (
		<Link to={`bookings/${booking.id}`}>
			<div
				key={booking.id}
				className={cn('flex justify-between border-l-3 bg-muted/10 p-4 hover:bg-muted/15', {
					'border-l-primary': booking.status === 'confirmed',
					'border-l-gray-500': booking.status === 'completed',
				})}
			>
				<div className="space-y-1">
					<p className="text-sm font-medium">{booking.court.name}</p>

					<p className="text-muted-foreground text-xs">
						{formatDistanceToNowStrict(booking.startDate, { addSuffix: true })} •{' '}
						{intervalWithSeparator}
					</p>
				</div>

				<BookingStatusBadge status={booking.status} />
			</div>
		</Link>
	)
}

interface WeeklyBookingsCardProps {
	upcomingBookings: BookingWithCourt[]
}

export function WeeklyBookingsCard({ upcomingBookings }: WeeklyBookingsCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-start justify-between space-y-0">
				<div className="space-y-1">
					<CardTitle className="text-base">This week</CardTitle>
					<CardDescription>Your upcoming court schedule</CardDescription>
				</div>

				<div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl">
					<CalendarDays className="size-4" />
				</div>
			</CardHeader>

			<CardContent className="space-y-6">
				<div className="grid grid-cols-7 gap-2">
					{weekDays.map((day) => (
						<button
							key={day.day}
							type="button"
							className="flex flex-col items-center rounded-md py-2 transition-colors hover:bg-muted/20"
						>
							<div className="flex flex-col gap-1">
								<span className=" text-sm font-semibold">{day.day}</span>

								<span className="text-muted-foreground text-xs">{day.label}</span>
							</div>

							{day.hasBooking && <span className="bg-primary h-1 w-4 rounded-full mt-2" />}
						</button>
					))}
				</div>

				<div className="flex justify-between items-center">
					{/* <CardTitle className="text-base">Manage your bookings</CardTitle> */}
					<span></span>

					<Link
						to="bookings"
						className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-all"
					>
						<span>View all</span>
						<ArrowRight size={12} />
					</Link>
				</div>

				<div className="flex flex-col gap-3">
					{upcomingBookings.map((booking) => (
						<UpcomingBookingCard key={booking.id} booking={booking} />
					))}
				</div>
			</CardContent>
		</Card>
	)
}
