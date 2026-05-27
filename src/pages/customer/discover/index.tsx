import { PageTitle } from '@/components/page-title'
import { DiscoverCourtCard } from './discover-court-card'
import { Pagination } from '@/components/pagination'
import { DiscoverCourtFilters } from './discover-court-filters'

export const courts = [
	{
		id: '1',
		name: 'Arena Paulista',
		sport: 'Soccer',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=840&auto=format&fit=crop',
		location: 'Av. Paulista, 1200',
		rating: 4.8,
		distance: '2.1',
	},

	{
		id: '2',
		name: 'Prime Padel Club',
		sport: 'Padel',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop',
		location: 'Rua Augusta, 450',
		rating: 4.9,
		distance: '3.4',
	},

	{
		id: '3',
		name: 'Urban Basketball',
		sport: 'Basketball',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
		location: 'Vila Olímpia, 210',
		rating: 4.7,
		distance: '5.2',
	},

	{
		id: '4',
		name: 'Beach Volley Center',
		sport: 'Volley',
		imageUrl:
			'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop',
		location: 'Moema, 890',
		rating: 4.6,
		distance: '4.8',
	},

	{
		id: '5',
		name: 'Next Goal Arena',
		sport: 'Football',
		imageUrl:
			'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
		location: 'Brooklin, 155',
		rating: 4.5,
		distance: '6.3',
	},

	{
		id: '6',
		name: 'Elite Tennis Club',
		sport: 'Tennis',
		imageUrl:
			'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop',
		location: 'Pinheiros, 340',
		rating: 4.9,
		distance: '7.1',
	},

	{
		id: '7',
		name: 'SportZone Arena',
		sport: 'Soccer',
		imageUrl:
			'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
		location: 'Morumbi, 78',
		rating: 4.4,
		distance: '8.5',
	},
	{
		id: '8',
		name: 'Green Field Club',
		sport: 'Soccer',
		imageUrl:
			'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
		location: 'Campo Belo, 500',
		rating: 4.7,
		distance: '9.2',
	},
]

export function Discover() {
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
