import type { BookingStatus } from './bookings-history-card'

const bookingStatusMap: Record<BookingStatus, string> = {
	confirmed: 'Confirmed',
	pending: 'Pending',
	canceled: 'Canceled',
	completed: 'Completed',
}

export const bookingsStatusColorMap: Record<BookingStatus, string> = {
	confirmed: 'bg-emerald-600',
	canceled: 'bg-rose-600',
	pending: 'bg-amber-500 animate-pulse',
	completed: 'bg-gray-500',
}

interface BookingStatusBadgeProps {
	status: BookingStatus
}

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
	return (
		<div className="flex items-center gap-2">
			<span className={`w-2 h-2 rounded-full ${bookingsStatusColorMap[status]}`} />
			<span>{bookingStatusMap[status]}</span>
		</div>
	)
}
