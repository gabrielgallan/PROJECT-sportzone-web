import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { getOrganizationDashboardMock } from '@/mocks/organization-dashboard'
import type { OrganizationDashboardPeriod } from '@/types/organization-dashboard'
import { BookingsAmountCard } from './components/bookings-amount-card'
import { BookingsOverviewChart } from './components/bookings-overview-chart'
import { BookingsPendingAmountCard } from './components/bookings-pending-amount-card'
import { DashboardEmptyState } from './components/dashboard-empty-state'
import { DashboardFilters } from './components/dashboard-filters'
import { OccupancyRateCard } from './components/occupancy-rate-card'
import { PendingActionsCard } from './components/pending-actions-card'
import { RevenueCard } from './components/revenue-card'
import { TopCourtsCard } from './components/top-courts-card'

function parsePeriod(value: string | null): OrganizationDashboardPeriod {
	if (value === 'today' || value === '7_days' || value === '30_days') {
		return value
	}

	return '30_days'
}

export function DashboardPage() {
	const [searchParams, _setSearchParams] = useSearchParams()

	const dashboard = useMemo(() => getOrganizationDashboardMock(), [])

	const period = parsePeriod(searchParams.get('period'))
	const selectedCourtId = searchParams.get('court') || 'all'

	const hasOperationalData = dashboard.courts.length > 0 && dashboard.topCourts.length > 0

	const bookingsSeries = dashboard.bookingsSeries[period]

	const visibleTopCourts = useMemo(() => {
		const filtered =
			selectedCourtId === 'all'
				? dashboard.topCourts
				: dashboard.topCourts.filter((court) => court.courtId === selectedCourtId)

		return [...filtered].sort((a, b) => b.occupancyRate - a.occupancyRate)
	}, [dashboard.topCourts, selectedCourtId])

	const visiblePendingActions = useMemo(() => {
		return selectedCourtId === 'all'
			? dashboard.pendingActions
			: dashboard.pendingActions.filter(
					(action) => !action.courtId || action.courtId === selectedCourtId
				)
	}, [dashboard.pendingActions, selectedCourtId])

	// const visibleRecentBookings = useMemo(() => {
	// 	const filteredByCourt =
	// 		selectedCourtId === 'all'
	// 			? dashboard.recentBookings
	// 			: dashboard.recentBookings.filter((booking) => booking.courtId === selectedCourtId)

	// 	return [...filteredByCourt]
	// 		.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
	// 		.slice(0, 5)
	// }, [dashboard.recentBookings, selectedCourtId])

	return (
		<>
			<PageTitle title="Dashboard" />
			<main className="flex flex-col gap-6 p-6">
				<DashboardFilters courts={dashboard.courts} />

				{hasOperationalData ? (
					<>
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							<BookingsAmountCard data={{ amount: 32, indicator: 50 }} />

							<BookingsPendingAmountCard data={{ amount: 12, indicator: 5 }} />

							<OccupancyRateCard data={{ percentual: 0.78, indicator: 12 }} />

							<RevenueCard data={{ receipt: 4826000, indicator: 8 }} />
						</div>

						<div className="grid md:grid-cols-12 gap-6">
							<div className="col-span-8 grid h-fit gap-6">
								<BookingsOverviewChart data={bookingsSeries} />

								<PendingActionsCard actions={visiblePendingActions} />
							</div>

							<div className="col-span-4 grid gap-6">
								<TopCourtsCard courts={visibleTopCourts} />
								{/* <RecentBookingsCard bookings={visibleRecentBookings} /> */}
							</div>
						</div>
					</>
				) : (
					<DashboardEmptyState />
				)}
			</main>
		</>
	)
}
