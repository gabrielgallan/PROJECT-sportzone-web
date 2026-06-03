import { MapPin, MousePointerClick } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { CourtWithMetrics } from '@/types/court'
import { CourtManagementHoverCard } from './court-management-hover-card'
import { CourtStatusBadge } from './court-status-badge'

interface CourtManagementCardProps {
	courtWithMetrics: CourtWithMetrics
}

export function CourtManagementCard({ courtWithMetrics: court }: CourtManagementCardProps) {
	const { metrics } = court

	return (
		<CourtManagementHoverCard court={court} metrics={metrics}>
			<Card className="gap-0 overflow-hidden p-0 transition-all hover:bg-muted/15 hover:shadow-sm">
				<div className="relative aspect-video overflow-hidden">
					<img
						src={court.imageUrl}
						alt={court.name}
						className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
					/>

					<div className="absolute top-3 left-3 flex gap-2">
						<CourtStatusBadge status={court.status} />
					</div>
				</div>

				<CardContent className="space-y-4 p-4">
					<div className="space-y-3">
						<div className="flex items-start justify-between gap-4">
							<div className="flex flex-col gap-2 text-left">
								<h1 className="text-lg font-semibold">{court.name}</h1>

								<div className="flex flex-wrap items-center gap-1">
									{court.sportTypes.slice(0, 2).map((sport) => (
										<span
											key={sport}
											className="rounded-sm bg-secondary px-3 py-0.5 text-xs text-secondary-foreground"
										>
											{sport}
										</span>
									))}
								</div>

								<div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
									<MapPin className="size-4" />
									<p className="line-clamp-1">{court.address}</p>
								</div>
							</div>

							<div className="shrink-0 text-right">
								<p className="text-xs text-muted-foreground">Per hour</p>
								<p className="text-lg font-semibold">
									{(court.pricePerHour / 100).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
										maximumFractionDigits: 0,
									})}
								</p>
							</div>
						</div>

						<span className="flex justify-center items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer">
							<MousePointerClick className="size-4" />
							<p className="text-xs">Click to manage court</p>
						</span>
					</div>
				</CardContent>
			</Card>
		</CourtManagementHoverCard>
	)
}
