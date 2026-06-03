import { format } from 'date-fns'
import { Ellipsis } from 'lucide-react'
import { bookingStatusMap } from '@/components/booking-status-badge'
import { PaymentStatusBadge } from '@/components/payment-status-badge'
import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import { getBookingsRegister } from '@/mocks/bookings'
import type { BookingRegister } from '@/types/booking'

interface BookingTableRowProps {
	booking: BookingRegister
}

function BookingTableRow({ booking }: BookingTableRowProps) {
	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startDate,
		endDate: booking.endDate,
	})

	return (
		<TableRow>
			<TableCell className="max-w-18">
				<span className="block truncate font-medium">{booking.id}</span>
			</TableCell>

			<TableCell>
				<span>{booking.customerName}</span>
			</TableCell>

			<TableCell>
				<span className="text-muted-foreground">{booking.courtName}</span>
			</TableCell>

			<TableCell>
				<span>{format(booking.startDate, 'dd MMM')}</span>
			</TableCell>

			<TableCell>
				<span className="text-xs font-mono">{intervalWithSeparator}</span>
			</TableCell>

			<TableCell className="text-xs">{bookingStatusMap[booking.status]}</TableCell>

			<TableCell>
				<PaymentStatusBadge status={booking.paymentStatus} />
			</TableCell>

			<TableCell className="text-right font-medium">
				{(booking.amount / 100).toLocaleString('en-US', {
					style: 'currency',
					currency: 'USD',
				})}
			</TableCell>

			<TableCell className="text-right">
				<Button variant="ghost" size="icon-sm">
					<Ellipsis className="size-4" />
				</Button>
			</TableCell>
		</TableRow>
	)
}

const bookings: BookingRegister[] = getBookingsRegister()

export function BookingsTable() {
	return (
		<div className="overflow-hidden rounded-sm border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Booking ID</TableHead>
						<TableHead>Customer</TableHead>
						<TableHead>Court</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Time</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Payment</TableHead>
						<TableHead className="text-right">Amount</TableHead>
						<TableHead className="w-10" />
					</TableRow>
				</TableHeader>
				<TableBody>
					{bookings.map((booking) => (
						<BookingTableRow key={booking.id} booking={booking} />
					))}
				</TableBody>
			</Table>
		</div>
	)
}
