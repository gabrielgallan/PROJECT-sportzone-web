import { cn } from '@/lib/utils'
import type { BookingStatus } from '@/types/booking'

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

export const bookingStatusColorMap: Record<BookingStatus, string> = {
	confirmed: 'primary',
	pending: 'amber-500',
	canceled: 'rose-500',
	completed: 'gray-500',
}

interface BookingStatusBadgeProps {
	status: BookingStatus
	variant?: 'badge' | 'dot'
}

export function BookingStatusBadge({ status, variant = 'badge' }: BookingStatusBadgeProps) {
	const bgSolid = `bg-${bookingStatusColorMap[status]}`

	return (
		<>
			{variant === 'badge' ? (
				<span
					className={cn(
						'inline-flex h-fit items-center rounded-full px-3 py-1 text-xs font-medium',
						bookingStatusClassMap[status]
					)}
				>
					{bookingStatusMap[status]}
				</span>
			) : (
				<div className="flex gap-2 items-center">
					<span className={cn(['block h-1.5 w-1.5 rounded', bgSolid])} />
					{bookingStatusMap[status]}
				</div>
			)}
		</>
	)
}
