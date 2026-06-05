import { UserRoundPlus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import TextFlip from '@/components/text-flip'
import { Button } from '@/components/ui/button'
import { InviteMemberDialog } from './components/invite-member-dialog'
import { MembersTable } from './components/members-table'
import { MembersTableFilters } from './components/members-table-filters'

export function OrganizationMembersPage() {
	const { slug } = useParams<{ slug: string }>()

	return (
		<>
			<PageTitle title={`Members • ${slug}`} />
			<main className="space-y-6 p-6">
				<header>
					<TextFlip
						title="Members of"
						subtitle="Manage your organization memberships"
						words={[slug!]}
					/>
				</header>

				<div className="space-y-6">
					<div className="flex justify-between">
						<MembersTableFilters />

						<InviteMemberDialog>
							<Button>
								<UserRoundPlus className="size-4 mr-1" />
								Invite member
							</Button>
						</InviteMemberDialog>
					</div>

					<MembersTable />

					<Pagination onPageChange={() => {}} pageIndex={0} perPage={10} totalCount={12} />
				</div>
			</main>
		</>
	)
}
