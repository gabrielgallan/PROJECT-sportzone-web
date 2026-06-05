import { useParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import TextFlip from '@/components/text-flip'
import { BookingsTable } from './components/bookings-table'
import { BookingsTableFilters } from './components/bookings-table-filters'

export function OrganizationBookingsPage() {
	const { slug } = useParams<{ slug: string }>()

	return (
		<>
			<PageTitle title={`Bookings • ${slug}`} />
			<main className="space-y-6 p-6">
				<header>
					<TextFlip
						title="Booking registers from"
						subtitle="Manage your organization booking's"
						words={[slug!]}
					/>
				</header>

				<div className="space-y-6">
					<BookingsTableFilters />

					<BookingsTable />

					<Pagination onPageChange={() => {}} pageIndex={0} perPage={10} totalCount={12} />
				</div>
			</main>
		</>
	)
}
