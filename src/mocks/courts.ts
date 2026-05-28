import type { Court } from '@/types/court'

const courts = [
	{
		id: '1',
		name: 'Arena Paulista',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=840&auto=format&fit=crop',
		address: 'Av. Paulista, 1200',
		org: 'Arena Paulista',
		rating: 4.8,
		distance: '2.1',
	},

	{
		id: '2',
		name: 'Prime Padel Club',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop',
		address: 'Rua Augusta, 450',
		org: 'Arena Paulista',
		rating: 4.9,
		distance: '3.4',
	},
	{
		id: '3',
		name: 'Urban Basketball',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
		address: 'Vila Olímpia, 210',
		org: 'Arena Paulista',
		rating: 4.7,
		distance: '5.2',
	},
	{
		id: '4',
		name: 'Beach Volley Center',
		imageUrl:
			'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop',
		address: 'Moema, 890',
		org: 'Arena Paulista',
		rating: 4.6,
		distance: '4.8',
	},
	{
		id: '5',
		name: 'Next Goal Arena',
		imageUrl:
			'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
		address: 'Brooklin, 155',
		org: 'Arena Paulista',
		rating: 4.5,
		distance: '6.3',
	},
	{
		id: '6',
		name: 'Elite Tennis Club',
		imageUrl:
			'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop',
		address: 'Pinheiros, 340',
		org: 'Arena Paulista',
		rating: 4.9,
		distance: '7.1',
	},
	{
		id: '7',
		name: 'Gallan Sport Club',
		imageUrl:
			'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
		address: 'Morumbi, 78',
		org: 'Arena Paulista',
		rating: 4.4,
		distance: '8.5',
	},
	{
		id: '8',
		name: 'Green Field Club',
		imageUrl:
			'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
		address: 'Campo Belo, 500',
		org: 'Arena Paulista',
		rating: 4.7,
		distance: '9.2',
	},
]

export function getCourts(limit?: number): Court[] {
	return limit ? courts.slice(0, limit) : courts
}
