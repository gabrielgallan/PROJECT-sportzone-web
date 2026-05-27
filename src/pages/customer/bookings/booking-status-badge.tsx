import { cn } from '@/lib/utils'

export type BookingStatus = 'confirmed' | 'pending' | 'canceled' | 'completed'

export const bookingStatusMap: Record<BookingStatus, string> = {
	confirmed: 'Confirmed',
	pending: 'Pending',
	canceled: 'Canceled',
	completed: 'Completed',
}

const bookingStatusClassMap: Record<BookingStatus, string> = {
	confirmed: 'bg-primary/10 text-primary',
	pending: 'bg-amber-500/10 text-amber-500',
	canceled: 'bg-rose-600/10 text-rose-600',
	completed: 'bg-gray-500/10 text-gray-500',
}

interface BookingStatusBadgeProps {
	status: BookingStatus
}

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex h-fit items-center rounded-full px-3 py-1 text-xs font-medium',
				bookingStatusClassMap[status]
			)}
		>
			{bookingStatusMap[status]}
		</span>
	)
}
