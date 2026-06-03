import { useLocation } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import { MembersTable } from './components/members-table'
import { MembersTableFilters } from './components/members-table-filters'

export function OrganizationMembersPage() {
	const { pathname } = useLocation()

	const [_, __, org] = pathname.split('/')

	return (
		<>
			<PageTitle title={`Members - ${org}`} />
			<main className="space-y-6 p-6">
				<header className="space-y-1">
					<h1 className="text-xl font-medium">
						Members of <span className="text-primary font-semibold">{org}</span>
					</h1>
					<p className="text-sm text-muted-foreground">Manage your organization memberships</p>
				</header>

				<div className="space-y-4">
					<MembersTableFilters />

					<MembersTable />

					<Pagination onPageChange={() => {}} pageIndex={0} perPage={10} totalCount={12} />
				</div>
			</main>
		</>
	)
}
