import { Link } from 'react-router-dom'
import { DiscoverCourtCard } from '@/components/discover-court-card'
import { PageTitle } from '@/components/page-title'
import { useIsMobile } from '@/hooks/use-mobile'
import { getUpcomingBookingsMock } from '@/mocks/bookings'
import { getCourts } from '@/mocks/courts'
import { CourtsCarousel } from './components/courts-carousel'
import { OverviewMainCard } from './components/overview-main-card'
import { WeeklyBookingsCard } from './components/weekly-bookings-card'

const upcomingBookings = getUpcomingBookingsMock()

const courts = getCourts(3)

export function OverviewPage() {
	const isMobile = useIsMobile()

	return (
		<>
			<PageTitle title="Overview" />
			<main className="grid gap-6 p-6">
				<OverviewMainCard />

				<div className="grid md:grid-cols-[1fr_22rem] h-fit gap-6">
					<div className="space-y-6">
						<header className="flex items-center justify-between">
							<h1 className="text-base font-semibold">
								Recent visited <span className="font-semibold text-primary">courts</span>
							</h1>

							<Link to="/discover">
								<span className="text-xs text-muted-foreground hover:text-primary">View more</span>
							</Link>
						</header>

						{isMobile ? (
							<CourtsCarousel courts={courts} />
						) : (
							<div className="grid md:grid-cols-3 gap-4">
								{courts.map((court) => (
									<DiscoverCourtCard key={court.id} court={court} hasVisited />
								))}
							</div>
						)}
					</div>

					<WeeklyBookingsCard upcomingBookings={upcomingBookings} />
				</div>
			</main>
		</>
	)
}
