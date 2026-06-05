import { Plus } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import TextFlip from '@/components/text-flip'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { getOrganizationCourtsManagement } from '@/mocks/courts'
import { MaintenenceCourtsAmountCard } from './components/cards/maintenance-courts-amout-card'
import { OnlineCourtsAmountCard } from './components/cards/online-courts-amount-card'
import { PendingCourtsAmountCard } from './components/cards/pending-courts-amount-card'
import { TotalCourtsAmountCard } from './components/cards/total-courts-amount-card'
import { CourtManagementCard } from './components/court-management-card'
import { CourtManagementModal } from './components/court-management-modal'
import { CourtsPageFilters } from './components/courts-page-filters'

const courts = getOrganizationCourtsManagement()

export function OrganizationCourtsPage() {
	const { slug } = useParams<{ slug: string }>()

	return (
		<>
			<PageTitle title={`Courts • ${slug}`} />
			<main className="space-y-6 p-6">
				<header>
					<TextFlip title="Court management for" words={[slug!]} />
				</header>

				<div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
					<TotalCourtsAmountCard />
					<OnlineCourtsAmountCard />
					<MaintenenceCourtsAmountCard />
					<PendingCourtsAmountCard />
				</div>

				<div className="flex items-center justify-between">
					<CourtsPageFilters />

					<Button>
						<Plus className="size-4" />
						New
					</Button>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{courts.map((court) => (
						<Dialog key={court.id}>
							<DialogTrigger>
								<CourtManagementCard key={court.id} courtWithMetrics={court} />
							</DialogTrigger>

							<CourtManagementModal courtWithMetrics={court} />
						</Dialog>
					))}
				</div>

				<Pagination onPageChange={() => {}} pageIndex={0} perPage={10} totalCount={12} />
			</main>
		</>
	)
}
