import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DiscoverCourtCard } from '@/components/discover-court-card'
import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import { getCourts } from '@/mocks/courts'
import type { Court } from '@/types/court'
import { DiscoverCourtFilters } from './components/discover-court-filters'

const mock = getCourts()

export function DiscoverPage() {
	const [courts, setCourts] = useState<Court[]>(mock)

	const [searchParams, _] = useSearchParams()

	useEffect(() => {
		const name = searchParams.get('name')

		if (name) {
			const filteredCourts = courts.filter((court) =>
				court.name.toLowerCase().includes(name.toLowerCase())
			)

			setCourts(filteredCourts)
		}
	}, [courts.filter, searchParams.get])

	return (
		<>
			<PageTitle title="Discover" />
			<main className="flex flex-col p-6 w-fit gap-6">
				<DiscoverCourtFilters />

				<div className="grid gap-6 md:grid-cols-3 2xl:grid-cols-4">
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
			</main>
		</>
	)
}
