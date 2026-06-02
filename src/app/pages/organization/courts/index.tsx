import { useLocation } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import { MaintenenceCourtsAmountCard } from './components/cards/maintenance-courts-amout-card'
import { OnlineCourtsAmountCard } from './components/cards/online-courts-amount-card'
import { PendingCourtsAmountCard } from './components/cards/pending-courts-amount-card'
import { TotalCourtsAmountCard } from './components/cards/total-courts-amount-card'
import { CourtsEmptyState } from './components/courts-empty-state'
import { CourtsGrid } from './components/courts-grid'
import { CourtsPageFilters } from './components/courts-page-filters'

const hasCourts = true

export function OrganizationCourtsPage() {
	const { pathname } = useLocation()

	const [_, __, org] = pathname.split('/')

	return (
		<>
			<PageTitle title={`${org} Courts`} />
			<main className="space-y-6 p-6">
				<div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
					<TotalCourtsAmountCard />
					<OnlineCourtsAmountCard />
					<MaintenenceCourtsAmountCard />
					<PendingCourtsAmountCard />
				</div>

				<CourtsPageFilters />

				{hasCourts ? <CourtsGrid /> : <CourtsEmptyState />}

				<Pagination onPageChange={() => {}} pageIndex={0} perPage={10} totalCount={12} />
			</main>
		</>
	)
}
