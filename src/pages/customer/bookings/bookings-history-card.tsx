import { Building2, Clock, MapPin } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { BookingStatusBadge } from './booking-status-badge'
import { cn } from '@/lib/utils'

export type BookingStatus = 'confirmed' | 'pending' | 'canceled' | 'completed'

interface Booking {
	date: string
	startTime: string
	endTime: string
	totalAmount: number
	status: BookingStatus
}

interface Court {
	name: string
	org: string
	address: string
	imageUrl: string
}

interface BookingHistoryCardProps {
	court: Court
	booking: Booking
}

export function BookingHistoryCard({ court, booking }: BookingHistoryCardProps) {
	return (
		<Card className="border hover:border-emerald-400 cursor-pointer transition-all duration-150">
			<CardContent className="flex gap-4">
				<div className="h-32 w-40 shrink-0 overflow-hidden rounded-lg">
					<img
						src={court.imageUrl}
						alt={court.name}
						loading="lazy"
						className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
					/>
				</div>

				<div className="flex-1 space-y-4">
					<div className="flex items-start justify-between gap-4">
						<div className="space-y-2">
							<div>
								<span className="text-base font-semibold">{court.name}</span>
							</div>

							<div className="flex flex-col gap-1">
								<div className="flex items-center gap-2 text-xs text-muted-foreground">
									<Building2 className="size-4" />
									<span>{court.org}</span>
								</div>

								<div className="flex items-center gap-2 text-xs text-muted-foreground">
									<MapPin className="size-4" />
									<span>{court.address}</span>
								</div>
							</div>
						</div>

						<BookingStatusBadge status={booking.status} />
					</div>

					<Separator />

					<div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Clock className="size-4" />
							<span>
								{booking.startTime} - {booking.endTime}
							</span>
						</div>

						<div className="flex items-center gap-2">
							<Label>Total amount:</Label>
							<span className="ml-auto font-semibold text-sm text-foreground">
								{(booking.totalAmount / 100).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
