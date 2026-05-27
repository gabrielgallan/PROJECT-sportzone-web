import { PageTitle } from '@/components/page-title'
import { WeeklyBookingsCard } from './weekly-bookings-card'
import { NextBookingCard } from './next-booking-card'
import { MonthlyBookingsAmountChart } from './monthly-bookings-amount-chart'
import { DiscoverCourtCard } from '../discover/discover-court-card'
import { Link } from 'react-router-dom'
import { useIsMobile } from '@/hooks/use-mobile'
import { CourtsCaroulsel } from './courts-caroulsel'

const nextBooking = {
	id: '1',
	court: {
		name: 'Arena Sports - Society Court',
		address: 'Estrada do Campo Limpo, 6903',
		org: 'Sport Arena',
	},
	startDate: new Date('2026-05-27T19:00:00.000Z'),
	endDate: new Date('2026-05-27T20:00:00.000Z'),
	status: 'confirmed',
}

const courts = [
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
		id: '3',
		name: 'Urban Basketball',
		sport: 'Basketball',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
		location: 'Vila Olímpia, 210',
		rating: 4.7,
		distance: '5.2',
	},
]

export function Overview() {
	const isMobile = useIsMobile()

	return (
		<>
			<PageTitle title="Overview" />
			<div className="flex flex-col p-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="col-span-3 grid gap-4 h-fit">
						<div className="grid md:grid-cols-4 h-fit gap-4">
							<div className="md:col-span-4">
								<NextBookingCard booking={nextBooking} />
							</div>
						</div>

						<div className="mt-6 space-y-6">
							<div className="flex items-center justify-between">
								<h1 className="text-2xl font-semibold">Recent visits</h1>

								<Link to="/discover">
									<span className="text-xs text-muted-foreground hover:text-primary">
										View more
									</span>
								</Link>
							</div>

							{isMobile ? (
								<CourtsCaroulsel courts={courts} />
							) : (
								<div className="grid md:grid-cols-4 gap-4">
									{courts.map((court) => (
										<DiscoverCourtCard key={court.id} court={court} hasVisited />
									))}
								</div>
							)}
						</div>
					</div>

					<div className="flex flex-col gap-4 h-fit">
						<WeeklyBookingsCard />
						{/* <MonthlyBookingsAmountChart /> */}
					</div>
				</div>
			</div>
		</>
	)
}
