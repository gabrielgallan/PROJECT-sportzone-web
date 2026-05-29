import type { Court, CourtDetails } from '@/types/court'

const courts: Court[] = [
	{
		id: '1',
		org: {
			id: 'org-1',
			name: 'Arena Paulista',
		},
		name: 'Arena Paulista',
		description: 'Modern indoor sports arena with premium structure and professional lighting.',
		address: 'Av. Paulista, 1200 - São Paulo, SP',
		latitude: -23.561684,
		longitude: -46.656139,
		rating: 4.8,
		pricePerHour: 12000,
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=840&auto=format&fit=crop',
	},

	{
		id: '2',
		org: {
			id: 'org-2',
			name: 'Prime Padel Club',
		},
		name: 'Prime Padel Club',
		description: 'Exclusive padel courts designed for competitive and casual matches.',
		address: 'Rua Augusta, 450 - São Paulo, SP',
		latitude: -23.555771,
		longitude: -46.658557,
		rating: 4.9,
		pricePerHour: 18000,
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '3',
		org: {
			id: 'org-3',
			name: 'Urban Basketball',
		},
		name: 'Urban Basketball',
		description: 'Urban-style basketball court ideal for training sessions and tournaments.',
		address: 'Vila Olímpia, 210 - São Paulo, SP',
		latitude: -23.595145,
		longitude: -46.684128,
		rating: 4.7,
		pricePerHour: 9000,
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '4',
		org: {
			id: 'org-4',
			name: 'Beach Volley Center',
		},
		name: 'Beach Volley Center',
		description: 'Sand courts with excellent outdoor infrastructure for beach volleyball.',
		address: 'Moema, 890 - São Paulo, SP',
		latitude: -23.601876,
		longitude: -46.667421,
		rating: 4.6,
		pricePerHour: 10000,
		imageUrl:
			'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '5',
		org: {
			id: 'org-5',
			name: 'Next Goal Arena',
		},
		name: 'Next Goal Arena',
		description: 'Professional football arena with premium synthetic grass and lighting.',
		address: 'Brooklin, 155 - São Paulo, SP',
		latitude: -23.623221,
		longitude: -46.696552,
		rating: 4.5,
		pricePerHour: 14000,
		imageUrl:
			'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '6',
		org: {
			id: 'org-6',
			name: 'Elite Tennis Club',
		},
		name: 'Elite Tennis Club',
		description: 'Premium tennis club with modern courts and athlete facilities.',
		address: 'Pinheiros, 340 - São Paulo, SP',
		latitude: -23.567912,
		longitude: -46.692112,
		rating: 4.9,
		pricePerHour: 22000,
		imageUrl:
			'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop',
	},

	{
		id: '7',
		org: {
			id: 'org-7',
			name: 'Gallan Sport Club',
		},
		name: 'Gallan Sport Club',
		description: 'Modern multi-sport venue with spacious courts and recreational areas.',
		address: 'Morumbi, 78 - São Paulo, SP',
		latitude: -23.602771,
		longitude: -46.721933,
		rating: 4.4,
		pricePerHour: 11000,
		imageUrl:
			'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '8',
		org: {
			id: 'org-8',
			name: 'Green Field Club',
		},
		name: 'Green Field Club',
		description: 'Open-air sports complex surrounded by green areas and premium facilities.',
		address: 'Campo Belo, 500 - São Paulo, SP',
		latitude: -23.625441,
		longitude: -46.674311,
		rating: 4.7,
		pricePerHour: 13000,
		imageUrl:
			'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '9',
		org: {
			id: 'org-9',
			name: 'Sky Sports Arena',
		},
		name: 'Sky Sports Arena',
		description: 'Large indoor complex focused on football and volleyball events.',
		address: 'Santana, 920 - São Paulo, SP',
		latitude: -23.496712,
		longitude: -46.625123,
		rating: 4.3,
		pricePerHour: 9500,
		imageUrl:
			'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '10',
		org: {
			id: 'org-10',
			name: 'Power Fitness Court',
		},
		name: 'Power Fitness Court',
		description: 'Modern sports environment integrated with gym and wellness facilities.',
		address: 'Ipiranga, 410 - São Paulo, SP',
		latitude: -23.584991,
		longitude: -46.609882,
		rating: 4.6,
		pricePerHour: 12500,
		imageUrl:
			'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '11',
		org: {
			id: 'org-11',
			name: 'Arena Blue Court',
		},
		name: 'Arena Blue Court',
		description: 'Premium blue courts with night lighting and tournament infrastructure.',
		address: 'Tatuapé, 630 - São Paulo, SP',
		latitude: -23.540122,
		longitude: -46.576221,
		rating: 4.8,
		pricePerHour: 16000,
		imageUrl:
			'https://images.unsplash.com/photo-1505666287802-931dc83a2f94?q=80&w=1470&auto=format&fit=crop',
	},

	{
		id: '12',
		org: {
			id: 'org-12',
			name: 'Pro League Center',
		},
		name: 'Pro League Center',
		description: 'Professional-level sports center focused on competitive matches and events.',
		address: 'Vila Mariana, 880 - São Paulo, SP',
		latitude: -23.589223,
		longitude: -46.634991,
		rating: 5,
		pricePerHour: 25000,
		imageUrl:
			'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1470&auto=format&fit=crop',
	},
]

const courtsWithDetailsMock: CourtDetails[] = [
	{
		id: '1',
		org: {
			id: 'org-1',
			name: 'Arena Paulista',
		},
		pricePerHour: 16000,
		name: 'Arena Paulista',
		description:
			'Modern indoor sports arena with premium structure, professional lighting and excellent accessibility.',
		address: 'Av. Paulista, 1200 - São Paulo, SP',
		latitude: -23.561684,
		longitude: -46.656139,
		rating: 4.8,
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?q=80&w=840&auto=format&fit=crop',
		amenities: ['parking', 'wifi', 'locker_room', 'lighting'],
		reviews: [
			{
				id: 'review-1',
				userName: 'Lucas Ferreira',
				userAvatarUrl: 'https://github.com/shadcn.png',
				rating: 5,
				comment: 'Excellent court quality and very organized environment.',
				createdAt: new Date('2026-05-10'),
			},
			{
				id: 'review-1',
				userName: 'Gabriel Gallan',
				userAvatarUrl: 'https://github.com/gabrielgallan.png',
				rating: 5,
				comment: 'Excellent court quality and very organized environment.',
				createdAt: new Date('2026-05-10'),
			},
			{
				id: 'review-1',
				userName: 'Diego Fernandes',
				userAvatarUrl: 'https://github.com/rocketseat.png',
				rating: 5,
				comment: 'Excellent court quality and very organized environment.',
				createdAt: new Date('2026-05-10'),
			},
		],
	},
	{
		id: '2',
		org: {
			id: 'org-2',
			name: 'Prime Padel Club',
		},
		pricePerHour: 16000,
		name: 'Prime Padel Club',
		description:
			'Exclusive padel club focused on competitive and casual matches with modern facilities.',
		address: 'Rua Augusta, 450 - São Paulo, SP',
		latitude: -23.555771,
		longitude: -46.658557,
		rating: 4.9,
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop',
		amenities: ['parking', 'wifi', 'bar'],
		reviews: [],
	},
	{
		id: '3',
		org: {
			id: 'org-3',
			name: 'Urban Basketball',
		},
		pricePerHour: 16000,
		name: 'Urban Basketball',
		description:
			'Urban-style basketball court designed for training sessions and local tournaments.',
		address: 'Vila Olímpia, 210 - São Paulo, SP',
		latitude: -23.595145,
		longitude: -46.684128,
		rating: 4.7,
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=1470&auto=format&fit=crop',
		amenities: ['lighting', 'locker_room'],
		reviews: [],
	},
	{
		id: '4',
		org: {
			id: 'org-4',
			name: 'Beach Volley Center',
		},
		pricePerHour: 16000,
		name: 'Beach Volley Center',
		description:
			'Sand courts with outdoor structure ideal for beach volleyball training and events.',
		address: 'Moema, 890 - São Paulo, SP',
		latitude: -23.601876,
		longitude: -46.667421,
		rating: 4.6,
		imageUrl:
			'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1470&auto=format&fit=crop',
		amenities: ['showers', 'parking', 'bar'],
		reviews: [],
	},
	{
		id: '5',
		org: {
			id: 'org-5',
			name: 'Next Goal Arena',
		},
		pricePerHour: 16000,
		name: 'Next Goal Arena',
		description: 'Professional football arena with synthetic grass and premium night lighting.',
		address: 'Brooklin, 155 - São Paulo, SP',
		latitude: -23.623221,
		longitude: -46.696552,
		rating: 4.5,
		imageUrl:
			'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
		amenities: ['parking', 'lighting', 'wifi'],
		reviews: [],
	},
	{
		id: '6',
		org: {
			id: 'org-6',
			name: 'Elite Tennis Club',
		},
		pricePerHour: 16000,
		name: 'Elite Tennis Club',
		description: 'High-end tennis courts with coaching area and premium athlete facilities.',
		address: 'Pinheiros, 340 - São Paulo, SP',
		latitude: -23.567912,
		longitude: -46.692112,
		rating: 4.9,
		imageUrl:
			'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=687&auto=format&fit=crop',
		amenities: ['locker_room', 'wifi', 'parking', 'showers'],
		reviews: [],
	},
	{
		id: '7',
		org: {
			id: 'org-7',
			name: 'Gallan Sport Club',
		},
		pricePerHour: 16000,
		name: 'Gallan Sport Club',
		description:
			'Multi-sport venue with modern infrastructure and spacious courts for group activities.',
		address: 'Morumbi, 78 - São Paulo, SP',
		latitude: -23.602771,
		longitude: -46.721933,
		rating: 4.4,
		imageUrl:
			'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1470&auto=format&fit=crop',
		amenities: ['parking', 'locker_room'],
		reviews: [],
	},
	{
		id: '8',
		org: {
			id: 'org-8',
			name: 'Green Field Club',
		},
		pricePerHour: 16000,
		name: 'Green Field Club',
		description: 'Open-air sports complex surrounded by green areas and recreational spaces.',
		address: 'Campo Belo, 500 - São Paulo, SP',
		latitude: -23.625441,
		longitude: -46.674311,
		rating: 4.7,
		imageUrl:
			'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
		amenities: ['parking', 'wifi', 'bar', 'lighting'],
		reviews: [],
	},
]

export function getCourts(limit?: number): Court[] {
	return limit ? courts.slice(0, limit) : courts
}

export function getCourtsWithDetails(): CourtDetails[] {
	return courtsWithDetailsMock
}

export function getCourtDetails(id: string): CourtDetails {
	const court = courtsWithDetailsMock.find((court) => court.id === id)

	return court ?? courtsWithDetailsMock[0]
}
