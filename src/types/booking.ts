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

export type PaymentStatus = 'pending' | 'paid' | 'refunded' | 'failed'

export interface BookingRegister extends Booking {
	customerName: string
	courtName: string
	paymentStatus: PaymentStatus
}
