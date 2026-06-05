import { MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { CourtWithMetrics } from '@/types/court'
import { CourtManagementHoverCard } from './court-management-hover-card'

interface CourtManagementCardProps {
	courtWithMetrics: CourtWithMetrics
}

export function CourtManagementCard({ courtWithMetrics: court }: CourtManagementCardProps) {
	const { metrics } = court

	return (
		<CourtManagementHoverCard court={court} metrics={metrics}>
			<Card className="transition-all p-0 hover:bg-muted/15 cursor-pointer">
				<CardContent className="space-y-4 p-4">
					<div className="space-y-3">
						<div className="flex items-start justify-between gap-4">
							<div className="flex flex-col gap-2 text-left">
								<h1 className="text-lg font-semibold">{court.name}</h1>

								<div className="flex flex-wrap h-5 items-center gap-1">
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

							<div>
								<p className="text-lg font-semibold">
									{(court.pricePerHour / 100).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
										maximumFractionDigits: 0,
									})}

									<span className="ml-1 text-xs font-normal text-muted-foreground">/ hour</span>
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</CourtManagementHoverCard>
	)
}
