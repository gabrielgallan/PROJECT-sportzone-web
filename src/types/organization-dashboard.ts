import type { BookingStatus } from '@/types/booking'

export type OrganizationDashboardPeriod = 'today' | '7_days' | '30_days'
export type OrganizationDashboardStatusFilter = 'all' | BookingStatus
export type OrganizationDashboardCourtFilter = 'all' | string

export interface OrganizationDashboardCourtOption {
	id: string
	name: string
}

export interface OrganizationDashboardSummary {
	bookingsToday: number
	pendingConfirmations: number
	occupancyRate: number
	revenueCents: number
}

export interface OrganizationDashboardTrendPoint {
	label: string
	bookings: number
}

export interface OrganizationCourtOccupancyPoint {
	courtId: string
	courtName: string
	occupancyRate: number
}

export type OrganizationPendingActionPriority = 'low' | 'medium' | 'high'

export interface OrganizationPendingAction {
	id: string
	title: string
	description: string
	priority: OrganizationPendingActionPriority
	href: string
	courtId?: string
}

export interface OrganizationRecentBookingItem {
	id: string
	customerName: string
	courtId: string
	courtName: string
	startDate: Date
	status: BookingStatus
	amount: number
	href: string
}

export interface OrganizationTopCourtItem {
	courtId: string
	courtName: string
	bookingsCount: number
	occupancyRate: number
	revenueCents: number
	rating?: number
}

export interface OrganizationDashboardData {
	courts: OrganizationDashboardCourtOption[]
	summaries: Record<OrganizationDashboardPeriod, OrganizationDashboardSummary>
	bookingsSeries: Record<OrganizationDashboardPeriod, OrganizationDashboardTrendPoint[]>
	occupancyByCourt: OrganizationCourtOccupancyPoint[]
	pendingActions: OrganizationPendingAction[]
	recentBookings: OrganizationRecentBookingItem[]
	topCourts: OrganizationTopCourtItem[]
}
