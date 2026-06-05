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
					startDate: new Date('2026-05-24T19:00:00'),
					endDate: new Date('2026-05-24T20:00:00'),
					amount: 4550,
					status: 'confirmed',
					court: {
						id: '1',
						name: 'Arena do São',
						description: '',
						sportTypes: [],
						status: 'online',
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
					startDate: new Date('2026-05-24T21:00:00'),
					endDate: new Date('2026-05-24T22:00:00'),
					amount: 5200,
					status: 'completed',
					court: {
						id: '2',
						name: 'Fut Arena Premium',
						description: '',
						sportTypes: [],
						status: 'online',
						pricePerHour: 52000,
						latitude: -23.1,
						longitude: -46.6,
						org: {
							id: '2',
							name: 'Fut Arena',
						},
						address: 'Rua Augusta, 450 - São Paulo, SP',
						rating: 4.8,
						imageUrl:
							'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
		{
			date: 'May 20, 2026',
			items: [
				{
					id: 'bk-3',
					startDate: new Date('2026-05-20T18:00:00'),
					endDate: new Date('2026-05-20T19:00:00'),
					amount: 3900,
					status: 'completed',
					court: {
						id: '3',
						name: 'Beach Sports Center',
						description: '',
						sportTypes: [],
						status: 'online',
						pricePerHour: 39000,
						latitude: -23.2,
						longitude: -46.5,
						org: {
							id: '3',
							name: 'Beach Sports',
						},
						address: 'Av. Jabaquara, 890 - São Paulo, SP',
						rating: 4.5,
						imageUrl:
							'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
		{
			date: 'May 16, 2026',
			items: [
				{
					id: 'bk-4',
					startDate: new Date('2026-05-16T20:00:00'),
					endDate: new Date('2026-05-16T22:00:00'),
					amount: 8400,
					status: 'completed',
					court: {
						id: '4',
						name: 'Quadra Society Pro',
						description: '',
						sportTypes: [],
						status: 'online',
						pricePerHour: 42000,
						latitude: -23.3,
						longitude: -46.4,
						org: {
							id: '4',
							name: 'Society Pro',
						},
						address: 'Rua Vergueiro, 2100 - São Paulo, SP',
						rating: 4.7,
						imageUrl:
							'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
					},
				},
				{
					id: 'bk-5',
					startDate: new Date('2026-05-16T14:00:00'),
					endDate: new Date('2026-05-16T15:00:00'),
					amount: 4800,
					status: 'canceled',
					court: {
						id: '5',
						name: 'Elite Tennis Club',
						description: '',
						sportTypes: [],
						status: 'online',
						pricePerHour: 48000,
						latitude: -23.4,
						longitude: -46.7,
						org: {
							id: '5',
							name: 'Elite Tennis',
						},
						address: 'Av. Rebouças, 1450 - São Paulo, SP',
						rating: 4.9,
						imageUrl:
							'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
		{
			date: 'May 10, 2026',
			items: [
				{
					id: 'bk-6',
					startDate: new Date('2026-05-10T09:00:00'),
					endDate: new Date('2026-05-10T10:00:00'),
					amount: 3500,
					status: 'completed',
					court: {
						id: '6',
						name: 'Arena Norte',
						description: '',
						sportTypes: [],
						status: 'online',
						pricePerHour: 35000,
						latitude: -23.5,
						longitude: -46.8,
						org: {
							id: '6',
							name: 'Arena Norte',
						},
						address: 'Rua das Palmeiras, 200 - São Paulo, SP',
						rating: 4.4,
						imageUrl:
							'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
	]
}

export function getUpcomingBookingsMock(): BookingWithCourt[] {
	return [
		{
			id: 'bk-4',
			startDate: new Date('2026-05-16T20:00:00'),
			endDate: new Date('2026-05-16T22:00:00'),
			amount: 8400,
			status: 'completed',
			court: {
				id: '4',
				name: 'Quadra Society Pro',
				description: '',
				sportTypes: [],
				status: 'online',
				pricePerHour: 42000,
				latitude: -23.3,
				longitude: -46.4,
				org: {
					id: '4',
					name: 'Society Pro',
				},
				address: 'Rua Vergueiro, 2100 - São Paulo, SP',
				rating: 4.7,
				imageUrl:
					'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-5',
			startDate: new Date('2026-05-16T14:00:00'),
			endDate: new Date('2026-05-16T15:00:00'),
			amount: 4800,
			status: 'canceled',
			court: {
				id: '5',
				name: 'Elite Tennis Club',
				description: '',
				sportTypes: [],
				status: 'online',
				pricePerHour: 48000,
				latitude: -23.4,
				longitude: -46.7,
				org: {
					id: '5',
					name: 'Elite Tennis',
				},
				address: 'Av. Rebouças, 1450 - São Paulo, SP',
				rating: 4.9,
				imageUrl:
					'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1470&auto=format&fit=crop',
			},
		},
		{
			id: 'bk-6',
			startDate: new Date('2026-05-10T09:00:00'),
			endDate: new Date('2026-05-10T10:00:00'),
			amount: 3500,
			status: 'completed',
			court: {
				id: '6',
				name: 'Arena Norte',
				description: '',
				sportTypes: [],
				status: 'online',
				pricePerHour: 35000,
				latitude: -23.5,
				longitude: -46.8,
				org: {
					id: '6',
					name: 'Arena Norte',
				},
				address: 'Rua das Palmeiras, 200 - São Paulo, SP',
				rating: 4.4,
				imageUrl:
					'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1470&auto=format&fit=crop',
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
