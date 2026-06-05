import { ChevronLeft, CircleX } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'

export function PaymentFailedPage() {
	const { bookingId } = useParams<{ bookingId: string }>()

	return (
		<>
			<PageTitle title="Payment failed" />

			<main className="flex h-full items-center justify-center">
				<div className="flex flex-col w-120 items-center gap-4">
					<CircleX className="size-16 text-rose-500" />

					<div className="space-y-2 text-center px-6">
						<h1 className="text-2xl font-semibold">Payment not completed</h1>

						<p className="text-muted-foreground">
							We couldn't process your payment. Your booking is still pending.
						</p>
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
