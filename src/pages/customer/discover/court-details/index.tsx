import { useParams } from 'react-router-dom'
import { BadgeCheck, Building2, MapPin, Star } from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { courtDetailsMock as court } from './court-details-mock'
import { Button } from '@/components/ui/button'
import { CourtReviewComment } from './court-review-comment'
import { CourtAmenityBadge } from './court-amenity-badge'
import { CourtsMap } from './court-map'

export function CourtDetailsPage() {
	const { courtId } = useParams()

	return (
		<div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6">
			<header className="flex justify-between items-end">
				<div className="space-y-2">
					<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{court.name}</h1>

					<div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
						<Building2 className="size-4" />
						<span>{court.org}</span>
					</div>
				</div>

				<div className="flex items-center gap-2 text-sm">
					<div className="flex items-center gap-1 font-medium text-foreground">
						<Star className="size-4 fill-primary text-primary" />
						<span>{court.rating}</span>
					</div>

					<span className="text-xs md:text-base text-muted-foreground">
						({court.reviews.length} reviews)
					</span>
				</div>
			</header>

			<div className="grid gap-6 lg:grid-cols-[1fr_360px]">
				<div className="space-y-8">
					<section className="grid gap-4">
						<div className="overflow-hidden rounded-xl">
							<img
								src={court.imageUrl}
								alt={court.name}
								className="aspect-video w-full object-cover object-center"
							/>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<img
								src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop"
								alt={`${court.name} preview 1`}
								className="aspect-4/3 w-full rounded-xl object-cover object-center"
							/>

							<img
								src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1293&auto=format&fit=crop"
								alt={`${court.name} preview 2`}
								className="aspect-4/3 w-full rounded-xl object-cover object-center"
							/>
						</div>
					</section>

					<section className="space-y-4">
						<h1 className="text-3xl font-semibold tracking-tight">About this court</h1>

						<div className="space-y-2">
							<p className="text-lg leading-7 text-muted-foreground">
								Modern sports venue with high-quality infrastructure, professional lighting,
								spacious locker rooms and a comfortable environment for casual matches and
								competitive games. Located in a prime area with easy access, parking availability
								and excellent maintenance standards.
							</p>
						</div>

						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin className="size-4 text-primary" />
							<span>{court.address}</span>
						</div>

						<div className="h-100">
							<CourtsMap />
						</div>
					</section>

					<section className="grid gap-4">
						<h1 className="text-3xl font-semibold tracking-tight">Amenities</h1>

						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{court.amenities.map((amenity) => (
								<CourtAmenityBadge key={amenity} amenity={amenity} />
							))}
						</div>
					</section>

					<section className="grid gap-4">
						<div className="flex justify-between items-end">
							<h1 className="text-3xl font-semibold tracking-tight">Reviews</h1>

							<div className="flex items-center gap-2 text-sm">
								<div className="flex items-center gap-1 font-medium text-foreground">
									<Star className="size-4 fill-primary text-primary" />
									<span>{court.rating}</span>
								</div>

								<span className="text-muted-foreground">({court.reviews.length})</span>
							</div>
						</div>

						<div className="space-y-4">
							{court.reviews.map((review) => (
								<CourtReviewComment key={review.id} review={review} />
							))}
						</div>

						<footer className="flex items-center justify-center">
							<span className="text-sm text-muted-foreground underline">See more</span>
						</footer>
					</section>
				</div>

				<aside className="lg:sticky lg:h-fit">
					<Card className="py-6">
						<CardContent className="space-y-4">
							<div>
								<span className="text-4xl font-semibold">
									{(45).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</span>
								<span className="text-sm text-muted-foreground"> / hour</span>
							</div>

							<div className="flex items-center gap-2 font-semibold text-muted-foreground animate-pulse">
								<span className="block h-2 w-2 rounded-full bg-muted-foreground" />
								Available Now
							</div>

							<Button
								type="button"
								className="w-full mt-6 py-6 text-sm hover:opacity-90 cursor-pointer"
							>
								<BadgeCheck className="size-4" />
								Book this court
							</Button>
						</CardContent>

						<div className="mx-auto">
							<span className="text-xs text-muted-foreground">
								Free cancellation up to 24 hours before booking
							</span>
						</div>
					</Card>
				</aside>
			</div>
		</div>
	)
}
