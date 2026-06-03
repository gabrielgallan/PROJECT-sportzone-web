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
			startDate: new Date(2026, 6, 4, 10),
			endDate: new Date(2026, 6, 4, 12),
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
		{
			id: 'bk-2',
			startDate: new Date(2026, 5, 1, 18),
			endDate: new Date(2026, 5, 1, 19),
			amount: 4550,
			status: 'completed',
			court: {
				id: '1',
				name: 'Parque Ibirapuera',
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

import type { BookingRegister } from '@/types/booking'

const bookingRegistersMock: BookingRegister[] = [
	{
		id: 'BK-1001',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Arena Paulista',
		status: 'confirmed',
		paymentStatus: 'paid',
		startDate: new Date(2026, 5, 3, 19, 0),
		endDate: new Date(2026, 5, 3, 20, 0),
		amount: 6000,
	},
	{
		id: 'BK-1002',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Arena Paulista',
		status: 'confirmed',
		paymentStatus: 'pending',
		startDate: new Date(2026, 5, 4, 18, 0),
		endDate: new Date(2026, 5, 4, 19, 0),
		amount: 5500,
	},
	{
		id: 'BK-1003',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Quadra Central',
		status: 'confirmed',
		paymentStatus: 'paid',
		startDate: new Date(2026, 5, 5, 20, 0),
		endDate: new Date(2026, 5, 5, 22, 0),
		amount: 12000,
	},
	{
		id: 'BK-1004',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Arena Paulista',
		status: 'canceled',
		paymentStatus: 'refunded',
		startDate: new Date(2026, 5, 6, 14, 0),
		endDate: new Date(2026, 5, 6, 15, 0),
		amount: 5000,
	},
	{
		id: 'BK-1005',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Court Premium',
		status: 'completed',
		paymentStatus: 'paid',
		startDate: new Date(2026, 5, 1, 9, 0),
		endDate: new Date(2026, 5, 1, 10, 0),
		amount: 7500,
	},
	{
		id: 'BK-1006',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Quadra Norte',
		status: 'confirmed',
		paymentStatus: 'paid',
		startDate: new Date(2026, 5, 7, 21, 0),
		endDate: new Date(2026, 5, 7, 22, 0),
		amount: 6500,
	},
	{
		id: 'BK-1007',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Court Premium',
		status: 'pending',
		paymentStatus: 'failed',
		startDate: new Date(2026, 5, 8, 17, 0),
		endDate: new Date(2026, 5, 8, 18, 0),
		amount: 8000,
	},
	{
		id: 'BK-1008',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Arena Paulista',
		status: 'completed',
		paymentStatus: 'paid',
		startDate: new Date(2026, 4, 30, 20, 0),
		endDate: new Date(2026, 4, 30, 21, 0),
		amount: 6000,
	},
	{
		id: 'BK-1009',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Quadra Central',
		status: 'confirmed',
		paymentStatus: 'paid',
		startDate: new Date(2026, 5, 10, 19, 0),
		endDate: new Date(2026, 5, 10, 20, 30),
		amount: 9000,
	},
	{
		id: 'BK-1010',
		customerName: 'gabriel.gallan@gmail.com',
		courtName: 'Quadra Norte',
		status: 'canceled',
		paymentStatus: 'refunded',
		startDate: new Date(2026, 5, 11, 16, 0),
		endDate: new Date(2026, 5, 11, 17, 0),
		amount: 5500,
	},
]

export function getBookingsRegister() {
	return bookingRegistersMock
}
