import { CheckCircle2, ChevronLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'

export function PaymentSuccessPage() {
	const { bookingId } = useParams<{ bookingId: string }>()

	return (
		<>
			<PageTitle title="Payment failed" />

			<main className="flex h-full items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<CheckCircle2 className="size-16 text-teal-500" />

					<div className="space-y-2 text-center">
						<h1 className="text-2xl font-semibold">Payment received</h1>

						<p className="text-muted-foreground">Your payment was submitted successfully.</p>
					</div>

					<Link to={`/my-bookings/${bookingId}`} className="grid w-full">
						<Button className="py-6" variant="ghost">
							<ChevronLeft />
							View Booking
						</Button>
					</Link>
				</div>
			</main>
		</>
	)
}
