import { ArrowRight, CalendarDays } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { BookingStatusBadge } from '../bookings/booking-status-badge'
import type { BookingStatus } from '../bookings/bookings-history-card'
import { formatDistanceToNowStrict } from 'date-fns'
import { useFormatBookingInterval } from '@/hooks/use-format-booking-interval'
import { cn } from '@/lib/utils'

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

interface BookingWithCourt {
	id: string
	court: {
		name: string
	}
	startDate: Date
	endDate: Date
	status: BookingStatus
}

const upcomingBookings: BookingWithCourt[] = [
	{
		id: '1',
		court: {
			name: 'Arena Sports - Society Court',
		},
		startDate: new Date('2026-05-27T19:00:00.000Z'),
		endDate: new Date('2026-05-27T20:00:00.000Z'),
		status: 'confirmed',
	},
	{
		id: '2',
		court: {
			name: 'Beach Tennis Club',
		},
		startDate: new Date('2026-05-29T20:00:00.000Z'),
		endDate: new Date('2026-05-29T21:30:00.000Z'),
		status: 'confirmed',
	},
	{
		id: '3',
		court: {
			name: 'Padel Center Premium',
		},
		startDate: new Date('2026-05-31T10:00:00.000Z'),
		endDate: new Date('2026-05-31T11:00:00.000Z'),
		status: 'completed',
	},
	{
		id: '4',
		court: {
			name: 'Downtown Basketball Arena',
		},
		startDate: new Date('2026-06-02T18:30:00.000Z'),
		endDate: new Date('2026-06-02T20:00:00.000Z'),
		status: 'completed',
	},
	{
		id: '4',
		court: {
			name: 'Downtown Basketball Arena',
		},
		startDate: new Date('2026-06-02T18:30:00.000Z'),
		endDate: new Date('2026-06-02T20:00:00.000Z'),
		status: 'completed',
	},
	{
		id: '4',
		court: {
			name: 'Downtown Basketball Arena',
		},
		startDate: new Date('2026-06-02T18:30:00.000Z'),
		endDate: new Date('2026-06-02T20:00:00.000Z'),
		status: 'completed',
	},
]

const bookingStatusColorMap: Partial<Record<BookingStatus, string>> = {
	confirmed: 'primary',
	completed: 'gray',
}

interface UpcomingBookingCardProps {
	booking: BookingWithCourt
}

function UpcomingBookingCard({ booking }: UpcomingBookingCardProps) {
	const { interval } = useFormatBookingInterval({
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
						{formatDistanceToNowStrict(booking.startDate, { addSuffix: true })} • {interval}
					</p>
				</div>

				<BookingStatusBadge status={booking.status} />
			</div>
		</Link>
	)
}

export function WeeklyBookingsCard() {
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
