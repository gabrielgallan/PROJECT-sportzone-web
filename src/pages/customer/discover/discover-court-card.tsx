import { MapPin, Star } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export interface Court {
	id: string
	name: string
	sport: string
	imageUrl: string
	location: string
	rating: number
	distance: string
}

interface DiscoverCourtCardProps {
	court: Court
	hasVisited?: boolean
}

export function DiscoverCourtCard({ court, hasVisited = false }: DiscoverCourtCardProps) {
	return (
		<Card className="overflow-hidden p-0 gap-0">
			<div className="aspect-video overflow-hidden">
				<img src={court.imageUrl} alt={court.name} className="h-full w-full object-cover" />
			</div>

			<CardContent className="space-y-4 p-5">
				<div className="space-y-2">
					<div className="flex items-start justify-between gap-3">
						<div>
							<h3 className="text-lg font-semibold">{court.name}</h3>

							<div className="mt-1 flex items-center gap-2">
								<Badge variant="secondary">{court.sport}</Badge>
							</div>
						</div>

						<div className="flex items-center gap-1 text-sm text-muted-foreground">
							<Star className="size-4 fill-current" />
							<span>{court.rating}</span>
						</div>
					</div>

					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<MapPin className="size-4" />

						<span>
							{court.location} · {court.distance} Km
						</span>
					</div>
				</div>

				{hasVisited ? (
					<Button variant="secondary" className="w-full py-5 hover:opacity-80 cursor-pointer">
						<span className="font-semibold">Book again</span>
					</Button>
				) : (
					<Button className="w-full py-5 hover:opacity-80 cursor-pointer">
						<span className="font-semibold">Book now</span>
					</Button>
				)}
			</CardContent>
		</Card>
	)
}
