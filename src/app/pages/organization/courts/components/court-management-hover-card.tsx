import { format, formatDistanceToNowStrict } from 'date-fns'
import type { ReactNode } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import type { Court, CourtMetrics } from '@/types/court'
import { CourtStatusBadge } from './court-status-badge'

interface CourtManagementHoverCardProps {
	court: Court
	metrics: CourtMetrics
	children: ReactNode
}

export function CourtManagementHoverCard({
	court,
	metrics,
	children,
}: CourtManagementHoverCardProps) {
	const status = court.status ?? 'pending'

	return (
		<HoverCard openDelay={120} closeDelay={100}>
			<HoverCardTrigger asChild>{children}</HoverCardTrigger>

			<HoverCardContent className="hidden w-90 space-y-4 p-4 md:block" side="bottom" align="start">
				<div className="space-y-2">
					<div className="flex items-start justify-between gap-3">
						<div className="space-y-1">
							<p className="font-semibold">{court.name}</p>
							<p className="text-xs text-muted-foreground">{court.org.name}</p>
						</div>

						<CourtStatusBadge status={status} />
					</div>

					<span className="text-xs">
						Registered for {formatDistanceToNowStrict(new Date(2026, 0, 10))}
					</span>
				</div>

				<div className="grid grid-cols-2 gap-2">
					<div className="px-4 py-3 flex flex-col justify-between border rounded-lg">
						<span className="text-xs text-muted-foreground">Month bookings</span>

						<span className="mt-2 text-base font-medium">{metrics.bookingsThisWeek}</span>
					</div>

					<div className="px-4 py-3 flex flex-col justify-between border rounded-lg">
						<span className="text-xs text-muted-foreground">Month occupancy</span>

						<span className="mt-2 text-base font-medium">
							{(metrics.occupancyRate / 100).toLocaleString('en-US', {
								style: 'percent',
							})}
						</span>
					</div>

					<div className="px-4 py-3 flex flex-col justify-between border rounded-lg">
						<span className="text-xs text-muted-foreground">Month revenue</span>

						<span className="mt-2 text-base font-medium">
							{(metrics.revenueThisMonth / 100).toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
							})}
						</span>
					</div>

					<div className="px-4 py-3 flex flex-col justify-between border rounded-lg">
						<span className="text-xs text-muted-foreground">Next Booking</span>

						<span className="text-sm font-medium">{format(new Date(), 'dd MMM hp')}</span>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}
