import { PageTitle } from '@/components/page-title'
import { WeeklyBookingsCard } from './weekly-bookings-card'
import { NextBookingCard } from './next-booking-card'
import { DiscoverCourtCard } from '../discover/discover-court-card'
import { Link } from 'react-router-dom'
import { useIsMobile } from '@/hooks/use-mobile'
import { CourtsCaroulsel } from './courts-caroulsel'
import { getCourts } from '@/mocks/courts'
import { getUpcomingBookingsMock } from '@/mocks/bookings'
import { ChartPieDonutActive } from './pie-chart'
import { MonthlyBookingsAmountChart } from './monthly-bookings-amount-chart'

const upcomingBookings = getUpcomingBookingsMock()

const courts = getCourts(4)

export function OverviewPage() {
	const isMobile = useIsMobile()

	return (
		<>
			<PageTitle title="Overview" />
			<div className="flex flex-col p-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="col-span-3 grid gap-4">
						{/* <div className="grid md:grid-cols-4 gap-4">
							<div className="md:col-span-4">
								<NextBookingCard booking={upcomingBookings[0]} />
							</div>
						</div> */}

						<div className="grid grid-cols-6 gap-4">
							<div className="col-span-4 h-90">
								<MonthlyBookingsAmountChart />
							</div>
							<div className="col-span-2">
								<ChartPieDonutActive />
							</div>
						</div>

						<div className="space-y-6">
							<div className="flex items-center justify-between">
								<h1 className="text-2xl font-semibold">Recent visits</h1>

								<Link to="/discover">
									<span className="text-xs text-muted-foreground hover:text-primary">
										View more
									</span>
								</Link>
							</div>

							{isMobile ? (
								<CourtsCaroulsel courts={courts} />
							) : (
								<div className="grid md:grid-cols-4 gap-4">
									{courts.map((court) => (
										<DiscoverCourtCard key={court.id} court={court} hasVisited />
									))}
								</div>
							)}
						</div>
					</div>

					<div className="flex flex-col gap-4 h-fit">
						<WeeklyBookingsCard upcomingBookings={upcomingBookings} />
						{/* <MonthlyBookingsAmountChart /> */}
					</div>
				</div>
			</div>
		</>
	)
}
