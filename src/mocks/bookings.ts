import type { BookingWithCourt } from '@/types/booking'

interface BookingHistoryByDate {
	date: string
	items: BookingWithCourt[]
}

export function getBookingsHistoryMock(): BookingHistoryByDate[] {
	return [
		{
			date: 'May 24, 2026',
			items: [
				{
					id: 'bk-1',
					startDate: new Date(),
					endDate: new Date(),
					amount: 4550,
					status: 'confirmed',
					court: {
						id: '1',
						name: 'Arena Paulista',
						org: 'Sportzone Club',
						address: 'Av. Paulista, 1200 - São Paulo, SP',
						distance: '12',
						rating: 4.6,
						imageUrl:
							'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
	]
}

export function getUpcomingBookingsMock(): BookingWithCourt[] {
	return [
		{
			id: 'bk-1',
			startDate: new Date('2026-05-28T19:00:00'),
			endDate: new Date('2026-05-28T20:30:00'),
			amount: 4550,
			status: 'confirmed',
			court: {
				id: '1',
				name: 'Arena Paulista',
				org: 'Sportzone Club',
				address: 'Av. Paulista, 1200 - São Paulo, SP',
				distance: '1.2',
				rating: 4.6,
				imageUrl:
					'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-2',
			startDate: new Date('2026-05-29T18:00:00'),
			endDate: new Date('2026-05-29T19:00:00'),
			amount: 3200,
			status: 'completed',
			court: {
				id: '2',
				name: 'Vila Sports Arena',
				org: 'Vila Sports',
				address: 'Rua Augusta, 450 - São Paulo, SP',
				distance: '2.5',
				rating: 4.8,
				imageUrl:
					'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-3',
			startDate: new Date('2026-05-30T20:00:00'),
			endDate: new Date('2026-05-30T21:30:00'),
			amount: 5800,
			status: 'confirmed',
			court: {
				id: '3',
				name: 'Next Level Court',
				org: 'Next Sports',
				address: 'Av. Faria Lima, 980 - São Paulo, SP',
				distance: '3.8',
				rating: 4.9,
				imageUrl:
					'https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-4',
			startDate: new Date('2026-06-01T17:30:00'),
			endDate: new Date('2026-06-01T18:30:00'),
			amount: 2900,
			status: 'completed',
			court: {
				id: '4',
				name: 'Urban Football Center',
				org: 'Urban Sports',
				address: 'Rua Vergueiro, 2100 - São Paulo, SP',
				distance: '4.1',
				rating: 4.5,
				imageUrl:
					'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-5',
			startDate: new Date('2026-06-02T21:00:00'),
			endDate: new Date('2026-06-02T22:00:00'),
			amount: 4100,
			status: 'confirmed',
			court: {
				id: '5',
				name: 'Prime Padel Club',
				org: 'Prime Sports',
				address: 'Av. Rebouças, 1550 - São Paulo, SP',
				distance: '5.4',
				rating: 4.7,
				imageUrl:
					'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-6',
			startDate: new Date('2026-06-03T19:30:00'),
			endDate: new Date('2026-06-03T21:00:00'),
			amount: 6700,
			status: 'completed',
			court: {
				id: '6',
				name: 'Elite Arena',
				org: 'Elite Sports Hub',
				address: 'Rua dos Pinheiros, 890 - São Paulo, SP',
				distance: '6.0',
				rating: 4.9,
				imageUrl:
					'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
			},
		},
	]
}
