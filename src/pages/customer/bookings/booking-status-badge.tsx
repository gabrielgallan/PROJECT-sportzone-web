import type { BookingStatus } from './bookings-history-card'

const bookingStatusMap: Record<BookingStatus, string> = {
	confirmed: 'Confirmed',
	pending: 'Pending',
	canceled: 'Canceled',
	completed: 'Completed',
}

export const bookingsStatusColorMap: Record<BookingStatus, string> = {
	confirmed: 'emerald-600',
	canceled: 'rose-600',
	pending: 'amber-500',
	completed: 'cyan-500',
}

interface BookingStatusBadgeProps {
	status: BookingStatus
}

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
	return (
		<div className="flex items-center gap-2">
			<span className={`w-2 h-2 rounded-full bg-${bookingsStatusColorMap[status]}`} />
			<span>{bookingStatusMap[status]}</span>
		</div>
	)
}
