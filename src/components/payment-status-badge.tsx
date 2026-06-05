import { cn } from '@/lib/utils'
import type { PaymentStatus } from '@/types/booking'

interface PaymentStatusBadgeProps {
	status: PaymentStatus
}

const paymentStatusTextMap: Record<PaymentStatus, string> = {
	paid: 'Paid',
	pending: 'Pending',
	refunded: 'Refunded',
	failed: 'Failed',
}

const paymentStatusClassMap: Record<PaymentStatus, string> = {
	paid: 'bg-emerald-500',
	pending: 'bg-amber-500',
	refunded: 'bg-gray-500',
	failed: 'bg-rose-700',
}

export function PaymentStatusBadge({ status }: PaymentStatusBadgeProps) {
	return (
		<div className="flex gap-2 items-center">
			<span className={cn(['size-2 rounded', paymentStatusClassMap[status]])} />
			{paymentStatusTextMap[status]}
		</div>
	)
}
