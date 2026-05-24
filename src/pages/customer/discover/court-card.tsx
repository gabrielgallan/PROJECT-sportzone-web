import { Check, CheckCircle2, CircleCheckBig, MapPin, Star } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
} from '@/components/ui/card'

interface CourtCardProps {
	name: string
	sport: string
	imageUrl: string
	location: string
	rating: number
	distance: string
}

export function CourtCard({
	name,
	sport,
	imageUrl,
	location,
	rating,
	distance,
}: CourtCardProps) {
	return (
		<Card className="overflow-hidden p-0">
			<div className="aspect-[16/9] overflow-hidden">
				<img
					src={imageUrl}
					alt={name}
					className="h-full w-full object-cover"
				/>
			</div>

			<CardContent className="space-y-4 p-5">
				<div className="space-y-2">
					<div className="flex items-start justify-between gap-3">
						<div>
							<h3 className="text-lg font-semibold">
								{name}
							</h3>

							<div className="mt-1 flex items-center gap-2">
								<Badge variant="secondary">
									{sport}
								</Badge>
							</div>
						</div>

						<div className="flex items-center gap-1 text-sm text-muted-foreground">
							<Star className="size-4 fill-current" />
							<span>{rating}</span>
						</div>
					</div>

					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<MapPin className="size-4" />

						<span>
							{location} · {distance} Km
						</span>
					</div>
				</div>

				<Button className="w-full py-5 hover:opacity-80 cursor-pointer">
					<span className='font-semibold'>Book now</span>
				</Button>
			</CardContent>
		</Card>
	)
}