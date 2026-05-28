import { PageTitle } from '@/components/page-title'
import { DiscoverCourtCard } from './discover-court-card'
import { Pagination } from '@/components/pagination'
import { DiscoverCourtFilters } from './discover-court-filters'
import { getCourts } from '@/mocks/courts'

const courts = getCourts()

export function DiscoverPage() {
	return (
		<>
			<PageTitle title="Discover" />
			<div className="flex flex-col p-6 w-fit gap-6">
				<DiscoverCourtFilters />

				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					{courts.map((court) => {
						return <DiscoverCourtCard key={court.id} court={court} />
					})}
				</div>

				<footer>
					<Pagination
						pageIndex={0}
						perPage={8}
						totalCount={courts.length}
						onPageChange={() => {}}
					/>
				</footer>
			</div>
		</>
	)
}
