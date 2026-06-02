import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { DiscoverCourtCard } from '@/components/discover-court-card'
import type { Court } from '@/types/court'

interface CourtsCarouselProps {
	courts: Court[]
}

export function CourtsCarousel({ courts }: CourtsCarouselProps) {
	return (
		<Carousel className="w-full">
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
