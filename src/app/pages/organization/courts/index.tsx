import { useLocation } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { CourtsEmptyState } from './components/courts-empty-state'
import { CourtsGrid } from './components/courts-grid'
import { CourtsOverviewStrip } from './components/courts-overview-strip'
import { CourtsPageFilters } from './components/courts-page-filters'
import { CourtsPageHeader } from './components/courts-page-header'

const hasCourts = true

export function OrganizationCourtsPage() {
	const { pathname } = useLocation()

	const [_, __, org] = pathname.split('/')

	return (
		<>
			<PageTitle title={`${org} courts`} />
			<main className="space-y-6 p-6">
				<CourtsPageHeader />
				<CourtsPageFilters />
				<CourtsOverviewStrip />
				{hasCourts ? <CourtsGrid /> : <CourtsEmptyState />}
			</main>
		</>
	)
}
