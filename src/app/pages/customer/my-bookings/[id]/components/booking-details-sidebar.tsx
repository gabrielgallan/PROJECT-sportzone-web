import { BadgeDollarSign, ChevronRight, HelpCircle, MessageCircle, Repeat2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { BookingWithCourt } from '@/types/booking'
import { CancelBookingModal } from './cancel-booking-modal'

interface BookingDetailsSidebarProps {
	booking: BookingWithCourt
	supportPageSearch: string
}

export function BookingDetailsSidebar({ booking, supportPageSearch }: BookingDetailsSidebarProps) {
	return (
		<aside className="flex flex-col gap-4">
			<div className="space-y-4">
				{['pending', 'confirmed'].includes(booking.status) && <CancelBookingModal />}

				{['pending'].includes(booking.status) && (
					<Card className="group hover:text-primary cursor-pointer transition-colors">
						<CardContent className="flex items-center justify-between">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<BadgeDollarSign className="size-4" />
									<CardTitle className="text-sm">Complete pending payment</CardTitle>
								</div>

								<CardDescription className="text-xs">
									Adjust how much you can send from your balance
								</CardDescription>
							</div>

							<div>
								<ChevronRight className="size-4 text-muted-foreground group-hover:text-primary" />
							</div>
						</CardContent>
					</Card>
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
										Adjust how much you can send from your balance
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
