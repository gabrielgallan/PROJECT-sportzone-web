import { Building2, MapPin } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import type { BookingWithCourt } from '@/types/booking'
import { RatingStars } from '@/pages/customer/discover/court-details/rating-stars'

interface BookingCourtCardProps {
	booking: BookingWithCourt
}

export function BookingCourtCard({ booking }: BookingCourtCardProps) {
	const { court } = booking

	return (
		<Card className="overflow-hidden py-0">
			<CardContent className="grid gap-2 p-0 md:grid-cols-[260px_1fr]">
				<div className="h-64 md:h-full">
					<img src={court.imageUrl} alt={court.name} className="size-full object-cover" />
				</div>

				<div className="grid gap-6 p-6">
					<div className="space-y-4">
						<div>
							<h1 className="text-2xl font-semibold tracking-tight">{court.name}</h1>

							<div className="flex items-center gap-2 text-muted-foreground text-sm">
								<Building2 className="size-4" />
								<span>{court.org.name}</span>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<RatingStars value={booking.court.rating} readOnly />
							<p className="text-xs text-muted-foreground">({court.rating})</p>
						</div>
					</div>

					<p className="text-muted-foreground leading-relaxed">{court.description}</p>

					<div className="flex items-center gap-2 text-primary">
						<MapPin className="size-4" />
						<span>{court.address}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
