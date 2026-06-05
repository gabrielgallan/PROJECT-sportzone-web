import { BadgeDollarSign, ChevronRight, HelpCircle, MessageCircle, Repeat2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { BookingWithCourt } from '@/types/booking'
import { CancelBookingModal } from './cancel-booking-modal'

interface BookingDetailsSidebarProps {
	booking: BookingWithCourt
	supportPageSearch: string
}

export function BookingDetailsSidebar({ booking, supportPageSearch }: BookingDetailsSidebarProps) {
	const navigate = useNavigate()

	function handlePayBooking() {
		navigate('payment/failed')

		toast.error('Failed to complete payment. You can try again at any time.', {
			position: 'top-center',
		})
	}

	return (
		<aside className="flex flex-col gap-4">
			<div className="space-y-4">
				{['pending', 'confirmed'].includes(booking.status) && <CancelBookingModal />}

				{['pending'].includes(booking.status) && (
					<button type="button" onClick={handlePayBooking}>
						<Card className="group hover:text-primary cursor-pointer transition-colors">
							<CardContent className="flex items-center justify-between">
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<BadgeDollarSign className="size-4" />
										<CardTitle className="text-sm">Pay</CardTitle>
									</div>

									<CardDescription className="text-xs">
										Complete the payment process to confirm your booking
									</CardDescription>
								</div>

								<div>
									<ChevronRight className="size-4 text-muted-foreground group-hover:text-primary" />
								</div>
							</CardContent>
						</Card>
					</button>
				)}

				{['completed'].includes(booking.status) && (
					<Link to="/discover/court/1" className="block">
						<Card className="group hover:text-teal-500 cursor-pointer transition-colors">
							<CardContent className="flex items-center justify-between">
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<Repeat2 className="size-4" />
										<CardTitle className="text-sm">Book again</CardTitle>
									</div>

									<CardDescription className="text-xs">
										You like this play? Book in this court again
									</CardDescription>
								</div>

								<div>
									<ChevronRight className="size-4 text-muted-foreground group-hover:text-teal-500" />
								</div>
							</CardContent>
						</Card>
					</Link>
				)}

				{['completed'].includes(booking.status) && (
					<Link to="/discover/court/1" className="block">
						<Card className="group hover:text-amber-500 cursor-pointer transition-colors">
							<CardContent className="flex items-center justify-between">
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<MessageCircle className="size-4" />
										<CardTitle className="text-sm">Review this court</CardTitle>
									</div>

									<CardDescription className="text-xs" />
								</div>

								<div>
									<ChevronRight className="size-4 text-muted-foreground group-hover:text-amber-500" />
								</div>
							</CardContent>
						</Card>
					</Link>
				)}
			</div>

			<Card className="bg-muted-foreground/5">
				<CardHeader className="flex items-center gap-2">
					<HelpCircle className="size-4" />
					<CardTitle className="text-sm">Need help with this booking ?</CardTitle>
				</CardHeader>

				<CardContent>
					<Link to={`/support?${supportPageSearch}`}>
						<Button className="p-0" variant="link">
							Contact our support team
						</Button>
					</Link>
				</CardContent>
			</Card>
		</aside>
	)
}
