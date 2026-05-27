import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { DiscoverCourtCard, type Court } from '../discover/discover-court-card'

interface CourtsCaroulselProps {
	courts: Court[]
}

export function CourtsCaroulsel({ courts }: CourtsCaroulselProps) {
	return (
		<Carousel className="w-full sm:max-w-xs">
			<CarouselContent>
				{courts.map((court) => (
					<CarouselItem key={court.id}>
						<div className="p-1">
							<DiscoverCourtCard key={court.id} court={court} hasVisited />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
