import { CourtManagementCard } from './court-management-card'

const courts = [
	{
		id: 'court-1',
		name: 'Arena A',
		sport: 'Football',
		address: 'Av. Paulista, 1200 - Sao Paulo, SP',
		imageUrl:
			'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
		status: 'active' as const,
		pricePerHour: 18000,
		bookingsThisWeek: 21,
		weeklyOccupancy: 84,
		nextBooking: 'Today, 18:00',
		alert: 'Availability is complete for the next 7 days.',
	},
	{
		id: 'court-2',
		name: 'Court B',
		sport: 'Padel',
		address: 'Rua Augusta, 450 - Sao Paulo, SP',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop',
		status: 'maintenance' as const,
		pricePerHour: 22000,
		bookingsThisWeek: 12,
		weeklyOccupancy: 61,
		nextBooking: 'Tomorrow, 09:00',
		alert: 'Maintenance scheduled for today between 13:00 and 17:00.',
	},
	{
		id: 'court-3',
		name: 'Center Court',
		sport: 'Tennis',
		address: 'Pinheiros, 340 - Sao Paulo, SP',
		imageUrl:
			'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop',
		status: 'draft' as const,
		pricePerHour: 25000,
		bookingsThisWeek: 0,
		weeklyOccupancy: 0,
		nextBooking: 'No bookings yet',
		alert: 'Court is still in draft and hidden from customers.',
	},
	{
		id: 'court-4',
		name: 'Hoops Arena',
		sport: 'Basketball',
		address: 'Vila Olimpia, 210 - Sao Paulo, SP',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
		status: 'paused' as const,
		pricePerHour: 14000,
		bookingsThisWeek: 8,
		weeklyOccupancy: 46,
		nextBooking: 'Friday, 20:00',
		alert: 'Missing morning availability tomorrow.',
	},
	{
		id: 'court-5',
		name: 'Volley Sand',
		sport: 'Volleyball',
		address: 'Moema, 890 - Sao Paulo, SP',
		imageUrl:
			'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop',
		status: 'active' as const,
		pricePerHour: 16000,
		bookingsThisWeek: 19,
		weeklyOccupancy: 79,
		nextBooking: 'Today, 19:30',
		alert: 'Weekend schedule is fully configured and published.',
	},
	{
		id: 'court-6',
		name: 'Arena Prime',
		sport: 'Football',
		address: 'Brooklin, 155 - Sao Paulo, SP',
		imageUrl:
			'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
		status: 'active' as const,
		pricePerHour: 20000,
		bookingsThisWeek: 24,
		weeklyOccupancy: 88,
		nextBooking: 'Today, 21:00',
		alert: 'High demand tonight. All slots after 18:00 are nearly full.',
	},
]

export function CourtsGrid() {
	return (
		<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{courts.map((court) => (
				<CourtManagementCard key={court.id} court={court} />
			))}
		</div>
	)
}
