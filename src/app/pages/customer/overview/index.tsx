import { PageTitle } from '@/components/page-title'
import { Link } from 'react-router-dom'
import { DiscoverCourtCard } from '@/components/discover-court-card'
import { useIsMobile } from '@/hooks/use-mobile'
import { CourtsCarousel } from './components/courts-carousel'
import { getCourts } from '@/mocks/courts'
import { getUpcomingBookingsMock } from '@/mocks/bookings'
import { OverviewMainCard } from './components/overview-main-card'
import { WeeklyBookingsCard } from './components/weekly-bookings-card'

const upcomingBookings = getUpcomingBookingsMock()

const courts = getCourts(4)

export function OverviewPage() {
	const isMobile = useIsMobile()

	return (
		<>
			<PageTitle title="Overview" />
			<div className="p-4">
				<div className="grid md:grid-cols-4 gap-4">
					<div className="col-span-3 grid gap-4">
						<div className="grid md:grid-cols-4 gap-4">
							<div className="md:col-span-4">
								<OverviewMainCard />
							</div>
						</div>

						{/* <div className="grid grid-cols-6 gap-4">
							<div className="col-span-4"></div>
							<div className="col-span-2">
								<ChartPieDonutActive />
							</div>
						</div> */}

						<div className="grid gap-6">
							<div className="flex items-center justify-between">
								<h1 className="text-base font-semibold">
									Recent visited <span className="font-semibold text-primary">courts</span>
								</h1>

								<Link to="/discover">
									<span className="text-xs text-muted-foreground hover:text-primary">
										View more
									</span>
								</Link>
							</div>

							{isMobile ? (
								<CourtsCarousel courts={courts} />
							) : (
								<div className="grid md:grid-cols-4 gap-4">
									{courts.map((court) => (
										<DiscoverCourtCard key={court.id} court={court} hasVisited />
									))}
								</div>
							)}
						</div>
					</div>

					<div>
						<WeeklyBookingsCard upcomingBookings={upcomingBookings} />
					</div>
				</div>
			</div>
		</>
	)
}
