import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { CourtStatus } from '@/types/court'

interface CourtStatusBadgeProps {
	status: CourtStatus
}

const courtStatusColorMap: Record<CourtStatus, string> = {
	pending: 'bg-amber-500',
	in_maintenance: 'bg-rose-500',
	online: 'bg-primary',
	paused: 'bg-gray-500',
}

const courtStatusTextMap: Record<CourtStatus, string> = {
	pending: 'Pending confirmation',
	in_maintenance: 'In maintenance',
	online: 'Online',
	paused: 'Paused',
}

export function CourtStatusBadge({ status }: CourtStatusBadgeProps) {
	return (
		<Badge className={cn('flex gap-2 text-white', courtStatusColorMap[status])}>
			<span className="block h-1.5 w-1.5 rounded bg-white" />
			{courtStatusTextMap[status]}
		</Badge>
	)
}
