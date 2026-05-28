import type { CourtDetails } from '@/types/court'

export const courtDetailsMock: CourtDetails = {
	id: 'court-1',
	name: 'Arena Paulista',
	org: 'Sportzone Club',
	distance: '1.2',
	rating: 4.8,
	address: 'Av. Paulista, 1200 - Sao Paulo, SP',
	imageUrl:
		'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
	amenities: ['parking', 'wifi', 'locker_room', 'lighting', 'showers'],
	reviews: [
		{
			id: 'review-1',
			userName: 'Lucas Martins',
			userAvatarUrl: 'https://i.pravatar.cc/150?img=12',
			rating: 5,
			comment: 'Excellent court structure and lighting. Great for night matches.',
			createdAt: new Date('2026-05-10'),
		},
		{
			id: 'review-2',
			userName: 'Gabriel Gallan',
			userAvatarUrl: 'https://github.com/gabrielgallan.png',
			rating: 4,
			comment: 'Very organized place and clean locker rooms. Parking could be larger.',
			createdAt: new Date('2026-05-14'),
		},
		{
			id: 'review-3',
			userName: 'Rafael Souza',
			userAvatarUrl: 'https://github.com/shadcn.png',
			rating: 5,
			comment: 'One of the best football courts in Sao Paulo. Easy booking process.',
			createdAt: new Date('2026-05-20'),
		},
	],
}
