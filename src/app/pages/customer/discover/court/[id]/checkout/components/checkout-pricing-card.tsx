import { differenceInHours } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { BookingWithCourt } from '@/types/booking'

export function formatCurrency(value: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(value / 100)
}

interface CheckoutPricingCardProps {
	booking: BookingWithCourt
}

export function CheckoutPricingCard({ booking }: CheckoutPricingCardProps) {
	const durationInHours = differenceInHours(booking.endDate, booking.startDate)

	const navigate = useNavigate()

	return (
		<Card className="px-1 py-4">
			<CardHeader>
				<CardTitle>Price summary</CardTitle>
				<CardDescription>Everything looks ready for your booking confirmation.</CardDescription>
			</CardHeader>

			<CardContent className="grid gap-4">
				<div className="py-6">
					<p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
						Total due
					</p>
					<div className="mt-3 flex items-end justify-between gap-3">
						<div>
							<p className="text-3xl font-semibold tracking-tight">
								{formatCurrency(booking.court.pricePerHour * durationInHours)}
							</p>
							<p className="text-sm text-muted-foreground">Secure your court instantly</p>
						</div>
						<div className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
							{durationInHours}h session
						</div>
					</div>
				</div>

				<div className="grid gap-3 text-sm">
					<div className="flex items-center justify-between">
						<span className="text-muted-foreground">Price per hour</span>
						<span>{formatCurrency(booking.court.pricePerHour)}</span>
					</div>

					<div className="flex items-center justify-between">
						<span className="text-muted-foreground">Duration</span>
						<span>{durationInHours} hour</span>
					</div>

					<div className="flex items-center justify-between">
						<span className="text-muted-foreground">Subtotal</span>
						<span>{formatCurrency(booking.court.pricePerHour * durationInHours)}</span>
					</div>
				</div>

				<Separator />

				<div className="flex items-center justify-between text-base font-semibold">
					<span>Total</span>
					<span>{formatCurrency(booking.court.pricePerHour * durationInHours)}</span>
				</div>
			</CardContent>

			<CardFooter className="flex-col items-stretch gap-4 border-0 bg-background">
				<Button onClick={() => navigate(`/my-bookings/${booking.id}`)} className="py-6">
					Confirm booking
				</Button>
				<p className="text-center text-xs leading-relaxed text-muted-foreground">
					You can review the payment step after confirming this reservation summary.
				</p>
			</CardFooter>
		</Card>
	)
}
