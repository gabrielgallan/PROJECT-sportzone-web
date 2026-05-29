import { Ban, CalendarCheck, CheckCheck, Clock, type LucideIcon } from 'lucide-react'

import type { BookingStatus } from '@/types/booking'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

interface BookingStatusAlertProps {
	status: BookingStatus
}

interface StatusAlertMapItem {
	icon: LucideIcon
	title: string
	description: string
	className: string
}

const statusAlertMap: Record<BookingStatus, StatusAlertMapItem> = {
	confirmed: {
		icon: CheckCheck,
		title: 'Booking confirmed!',
		description: 'Your booking is confirmed and ready.',
		className: 'text-primary bg-primary/10',
	},
	canceled: {
		icon: Ban,
		title: 'Booking canceled',
		description: 'This booking has been canceled.',
		className: 'text-rose-500 bg-rose-500/10',
	},
	completed: {
		icon: CalendarCheck,
		title: 'Booking already completed',
		description: 'This booking has already taken place.',
		className: 'text-muted-foreground bg-muted/40',
	},
	pending: {
		icon: Clock,
		title: 'Pending of payment',
		description: 'Your booking is pending and waiting for confirmation.',
		className: 'text-yellow-600 bg-yellow-500/10 animate-pulse',
	},
}

export function BookingStatusAlert({ status }: BookingStatusAlertProps) {
	const { icon: Icon, title, description, className } = statusAlertMap[status]

	return (
		<Alert className={cn(['flex items-center p-0 border-0', className])}>
			<div className="p-6">
				<Icon className="size-6" />
			</div>
			<div>
				<AlertTitle className="font-semibold">{title}</AlertTitle>
				<AlertDescription>{description}</AlertDescription>
			</div>
		</Alert>
	)
}
