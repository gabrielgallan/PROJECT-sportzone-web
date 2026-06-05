import { ChevronLeft } from 'lucide-react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import type { BookingWithCourt } from '@/types/booking'
import { CheckoutBookingCard } from './components/checkout-booking-card'
import { CheckoutPolicyCard } from './components/checkout-policy-card'
import { CheckoutPricingCard } from './components/checkout-pricing-card'

const bookingWithCourtMock: BookingWithCourt = {
	id: 'bk-1',
	status: 'pending',
	startDate: new Date('2026-05-29T18:00:00'),
	endDate: new Date('2026-05-29T19:00:00'),
	amount: 45000,
	court: {
		id: 'court-1',
		name: 'Arena Paulista',
		sportTypes: [],
		status: 'online',
		description:
			'Modern sports venue with high-quality infrastructure, professional lighting and a comfortable environment for casual matches and competitive games.',
		pricePerHour: 45000,
		address: 'Av. Paulista, 1200 - Sao Paulo, SP',
		latitude: -23.561684,
		longitude: -46.655981,
		rating: 3.9,
		imageUrl:
			'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop',
		org: {
			id: 'org-1',
			name: 'Sportzone Club',
		},
	},
}

export function BookingCheckoutPage() {
	const [searchParams] = useSearchParams()
	const { courtId } = useParams<{ courtId: string }>()

	const startDateParam = searchParams.get('start')
	const endDateParam = searchParams.get('end')

	const startDate = startDateParam ? new Date(startDateParam) : null
	const endDate = endDateParam ? new Date(endDateParam) : null

	const hasValidBookingRange = startDate !== null && endDate !== null

	if (!hasValidBookingRange) {
		throw new Error()
	}

	const booking: BookingWithCourt = {
		...bookingWithCourtMock,
		startDate,
		endDate,
	}

	return (
		<>
			<PageTitle title="Checkout" />

			<main className="mx-auto grid max-w-300 w-full gap-6 px-4 py-6">
				<header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
					<div className="max-w-2xl space-y-2">
						<div className="inline-flex items-center rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
							Booking checkout
						</div>

						<div className="space-y-2">
							<h1 className="text-2xl font-semibold tracking-tight">
								Review and confirm your booking
							</h1>
							<p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
								Confirm your court, schedule, and final amount before moving forward with the
								booking flow.
							</p>
						</div>
					</div>

					<Link to={`/discover/court/${courtId}`}>
						<Button className="w-fit" variant="ghost">
							<ChevronLeft className="size-4" />
							Back
						</Button>
					</Link>
				</header>

				<div className="grid gap-6 md:grid-cols-[1fr_22rem]">
					<div className="space-y-6">
						<CheckoutBookingCard booking={booking} />

						<CheckoutPolicyCard />
					</div>

					<aside className="lg:top-6 lg:h-fit">
						<CheckoutPricingCard booking={booking} />
					</aside>
				</div>
			</main>
		</>
	)
}
