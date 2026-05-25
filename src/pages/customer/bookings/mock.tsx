export function getBookingsHistoryMock() {
	return [
		{
			date: 'May 24, 2026',
			items: [
				{
					booking: {
						id: 'bk-1',
						date: 'May 24, 2026',
						startTime: '18:00',
						endTime: '19:30',
						totalAmount: 4550,
						status: 'confirmed',
					},

					court: {
						name: 'Arena Paulista',
						org: 'Sportzone Club',
						address: 'Av. Paulista, 1200 - São Paulo, SP',
						imageUrl:
							'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
					},
				},

				{
					booking: {
						id: 'bk-2',
						date: 'May 24, 2026',
						startTime: '20:00',
						endTime: '21:00',
						totalAmount: 3200,
						status: 'completed',
					},

					court: {
						name: 'Urban Basketball',
						org: 'NextPlay Courts',
						address: 'Rua Funchal, 220 - Vila Olímpia, SP',
						imageUrl:
							'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
		{
			date: 'May 12, 2026',
			items: [
				{
					booking: {
						id: 'bk-6',
						date: 'May 12, 2026',
						startTime: '16:00',
						endTime: '17:30',
						totalAmount: 6000,
						status: 'canceled',
					},

					court: {
						name: 'Elite Tennis Club',
						org: 'Ace Sports',
						address: 'Alameda Santos, 340 - Jardins, SP',
						imageUrl:
							'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop',
					},
				},
			],
		},

		{
			date: 'April 28, 2026',
			items: [
				{
					booking: {
						id: 'bk-7',
						date: 'April 28, 2026',
						startTime: '18:30',
						endTime: '20:00',
						totalAmount: 4700,
						status: 'completed',
					},

					court: {
						name: 'Next Goal Arena',
						org: 'Arena Group',
						address: 'Av. Giovanni Gronchi, 1500 - Morumbi, SP',
						imageUrl:
							'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
					},
				},

				{
					booking: {
						id: 'bk-8',
						date: 'April 28, 2026',
						startTime: '20:30',
						endTime: '22:00',
						totalAmount: 3900,
						status: 'pending',
					},

					court: {
						name: 'SportZone Arena',
						org: 'Sportzone Club',
						address: 'Rua dos Pinheiros, 1100 - Pinheiros, SP',
						imageUrl:
							'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
					},
				},
			],
		},
	]
}
