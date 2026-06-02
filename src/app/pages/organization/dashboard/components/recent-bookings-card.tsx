import { format } from 'date-fns'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BookingStatusBadge } from '@/components/booking-status-badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { OrganizationRecentBookingItem } from '@/types/organization-dashboard'

interface RecentBookingsCardProps {
	bookings: OrganizationRecentBookingItem[]
}

function formatCurrency(value: number) {
	return (value / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	})
}

export function RecentBookingsCard({ bookings }: RecentBookingsCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-start justify-between gap-3">
				<div className="space-y-1">
					<CardTitle>Upcoming bookings</CardTitle>
					<CardDescription>The next reservations scheduled to happen.</CardDescription>
				</div>
				<Link to="bookings">
					<Button variant="ghost" size="sm" className="text-xs">
						View all
						<ArrowRight className="size-3.5" />
					</Button>
				</Link>
			</CardHeader>
			<CardContent className="space-y-3">
				{bookings.length ? (
					bookings.slice(0, 5).map((booking) => (
						<div key={booking.id} className="rounded-xl border bg-muted/10 p-4">
							<div className="flex items-start justify-between gap-3">
								<div className="space-y-2">
									<div>
										<p className="text-sm font-medium">{booking.customerName}</p>
										<p className="text-xs text-muted-foreground">{booking.courtName}</p>
									</div>
									<div className="flex items-center gap-2 text-xs text-muted-foreground">
										<CalendarDays className="size-3.5" />
										<span>{format(booking.startDate, 'MMM dd • HH:mm')}</span>
									</div>
								</div>
								<div className="flex flex-col items-end gap-2">
									<BookingStatusBadge status={booking.status} />
									<span className="text-xs font-medium text-muted-foreground">
										{formatCurrency(booking.amount)}
									</span>
								</div>
							</div>
						</div>
					))
				) : (
					<p className="text-sm text-muted-foreground">No bookings match the selected filters.</p>
				)}
			</CardContent>
		</Card>
	)
}
