import type { Court } from './court'

export type BookingStatus = 'confirmed' | 'pending' | 'canceled' | 'completed'

export interface Booking {
	id: string
	courtId?: string
	status: BookingStatus
	startDate: Date
	endDate: Date
	amount: number
}

export interface BookingWithCourt extends Booking {
	court: Court
}
