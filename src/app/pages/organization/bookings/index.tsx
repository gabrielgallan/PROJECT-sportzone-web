import { useLocation } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import { BookingsTable } from './components/bookings-table'
import { BookingsTableFilters } from './components/bookings-table-filters'

export function OrganizationBookingsPage() {
	const { pathname } = useLocation()

	const [_, __, org] = pathname.split('/')

	return (
		<>
			<PageTitle title={`Bookings - ${org}`} />
			<main className="space-y-6 p-6">
				<header className="space-y-1">
					<h1 className="text-xl font-medium">
						Booking registers from <span className="text-primary font-semibold">{org}</span>
					</h1>
					<p className="text-sm text-muted-foreground">Manage your organization booking's</p>
				</header>

				<div className="space-y-4">
					<BookingsTableFilters />

					<BookingsTable />

					<Pagination onPageChange={() => {}} pageIndex={0} perPage={10} totalCount={12} />
				</div>
			</main>
		</>
	)
}
