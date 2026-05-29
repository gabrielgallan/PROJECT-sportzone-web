interface Organization {
	id: string
	name: string
}

export interface Court {
	id: string
	org: Organization
	name: string
	description: string
	pricePerHour: number
	address: string
	latitude: number
	longitude: number
	rating: number
	imageUrl: string
}

export interface CourtReview {
	id: string
	userName: string
	userAvatarUrl?: string
	rating: number
	comment: string
	createdAt: Date
}

export type CourtAmenity = 'parking' | 'wifi' | 'locker_room' | 'bar' | 'lighting' | 'showers'

export interface CourtDetails extends Court {
	reviews: CourtReview[]
	amenities: CourtAmenity[]
}
