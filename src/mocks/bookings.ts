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
						name: 'Arena do São',
						description: '',
						pricePerHour: 45000,
						latitude: -23.0,
						longitude: -40.0,
						org: {
							id: '1',
							name: 'Sportzone Club',
						},
						address: 'Av. Paulista, 1200 - São Paulo, SP',
						rating: 4.6,
						imageUrl:
							'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
		{
			date: 'May 12, 2026',
			items: [
				{
					id: 'bk-2',
					startDate: new Date(),
					endDate: new Date(),
					amount: 4550,
					status: 'completed',
					court: {
						id: '1',
						name: 'Arena Paulista',
						description: '',
						pricePerHour: 45000,
						latitude: -23.0,
						longitude: -40.0,
						org: {
							id: '1',
							name: 'Sportzone Club',
						},
						address: 'Av. Paulista, 1200 - São Paulo, SP',
						rating: 4.6,
						imageUrl:
							'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
					},
				},
				{
					id: 'bk-3',
					startDate: new Date(),
					endDate: new Date(),
					amount: 4550,
					status: 'pending',
					court: {
						id: '1',
						name: 'Arena Paulista',
						description: '',
						pricePerHour: 45000,
						latitude: -23.0,
						longitude: -40.0,
						org: {
							id: '1',
							name: 'Sportzone Club',
						},
						address: 'Av. Paulista, 1200 - São Paulo, SP',
						rating: 4.6,
						imageUrl:
							'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
		{
			date: 'April 6, 2026',
			items: [
				{
					id: 'bk-4',
					startDate: new Date(),
					endDate: new Date(),
					amount: 4550,
					status: 'canceled',
					court: {
						id: '1',
						name: 'Arena Paulista',
						description: '',
						pricePerHour: 45000,
						latitude: -23.0,
						longitude: -40.0,
						org: {
							id: '1',
							name: 'Sportzone Club',
						},
						address: 'Av. Paulista, 1200 - São Paulo, SP',
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
			startDate: new Date(),
			endDate: new Date(),
			amount: 4550,
			status: 'confirmed',
			court: {
				id: '1',
				name: 'Arena Paulista',
				description: '',
				pricePerHour: 45000,
				latitude: -23.0,
				longitude: -40.0,
				org: {
					id: '1',
					name: 'Sportzone Club',
				},
				address: 'Av. Paulista, 1200 - São Paulo, SP',
				rating: 4.6,
				imageUrl:
					'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
			},
		},
	]
}
