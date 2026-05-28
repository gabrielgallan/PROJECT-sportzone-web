export interface Court {
	id: string
	name: string
	org: string
	distance: string
	rating: number
	address: string
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
