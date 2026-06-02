import { ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { TopCourtsPieChart } from './top-courts-pie-chart'

interface CourtMetricsData {
	courtId: string
	courtName: string
	bookingsCount: number
	occupancyRate: number
	revenueCents: number
	rating?: number
}

interface TopCourtsCardProps {
	courts: CourtMetricsData[]
}

function formatCurrency(value: number) {
	return (value / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
	})
}

export function TopCourtsCard({ courts }: TopCourtsCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Top courts</CardTitle>
				<CardDescription>Courts ranked by occupancy rate in the selected period.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6 mt-6">
				<div>
					<TopCourtsPieChart />
				</div>

				<div className="space-y-4">
					{courts.length ? (
						courts.slice(0, 5).map((court, index) => (
							<div key={court.courtId} className="rounded-xl border bg-muted/10 p-4">
								<div className="flex items-start justify-between gap-4">
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<span className="text-xs font-semibold text-primary">#{index + 1}</span>
											<p className="text-sm font-medium">{court.courtName}</p>
										</div>
										<div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
											<span>{court.bookingsCount} bookings</span>
											<span>{formatCurrency(court.revenueCents)}</span>
											{court.rating ? (
												<span className="inline-flex items-center gap-1">
													<Star className="size-3.5 fill-primary text-primary" />
													{court.rating}
												</span>
											) : null}
										</div>
									</div>
									<div className="text-right">
										<p className="text-xs text-muted-foreground">Occupancy</p>
										<p className="text-lg font-semibold">
											{(court.occupancyRate / 100).toLocaleString('en-US', { style: 'percent' })}
										</p>
									</div>
								</div>
							</div>
						))
					) : (
						<p className="text-sm text-muted-foreground">No courts match the selected filters.</p>
					)}
				</div>
			</CardContent>

			<CardFooter className="flex items-center justify-center mt-auto">
				<Link
					to="courts"
					className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
				>
					<span>Manage your courts</span>
					<ChevronRight className="size-4" />
				</Link>
			</CardFooter>
		</Card>
	)
}
