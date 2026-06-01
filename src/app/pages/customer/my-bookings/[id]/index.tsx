import {
	BadgeDollarSign,
	Ban,
	ChevronLeft,
	ChevronRight,
	HelpCircle,
	MessageCircle,
	Repeat2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import type { BookingWithCourt } from '@/types/booking'

import { BookingCourtCard } from './components/booking-court-card'
import { BookingSummaryCard } from './components/booking-summary-card'
import { PageTitle } from '@/components/page-title'
import { BookingStatusAlert } from './components/booking-status-alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format, formatDistanceToNow } from 'date-fns'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import { CancelBookingModal } from './components/cancel-booking-modal'

const booking: BookingWithCourt = {
	id: 'bk-1',
	status: 'pending',
	startDate: new Date('2026-05-29T18:00:00'),
	endDate: new Date('2026-05-29T19:00:00'),
	amount: 45000,
	court: {
		id: 'court-1',
		name: 'Arena Paulista',
		description:
			'Modern sports venue with high-quality infrastructure, professional lighting and a comfortable environment for casual matches and competitive games.',
		pricePerHour: 45000,
		address: 'Av. Paulista, 1200 - São Paulo, SP',
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

export function BookingDetailsPage() {
	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startDate,
		endDate: booking.endDate,
	})

	const supportPageParams = new URLSearchParams({
		subject: 'booking',
		issue: `Booking ID: ${booking.id}`,
	})

	return (
		<>
			<PageTitle title="Booking Details" />
			<main className="mx-auto grid max-w-300 w-full gap-6 py-6 px-4">
				<header className="flex justify-between items-start">
					<div className="space-y-1">
						<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Booking details</h1>

						<span className="text-sm md:text-base text-muted-foreground">
							View the details and status of your court reservation for{' '}
							{format(booking.startDate, 'dd MMM')} on {booking.court.name}
						</span>
					</div>

					<Link to="/my-bookings">
						<Button className="flex items-center justify-between py-4" variant="ghost">
							<ChevronLeft className="size-4" />
							Back
						</Button>
					</Link>
				</header>

				<BookingStatusAlert status={booking.status} />

				<div className="grid gap-6 lg:grid-cols-[1fr_360px]">
					<div className="grid gap-6">
						<BookingCourtCard booking={booking} />

						<Card className="gap-4">
							<CardHeader>
								<CardTitle className="text-base">Schedule information</CardTitle>
								<CardDescription>
									Your booking starts {formatDistanceToNow(booking.startDate, { addSuffix: true })}
								</CardDescription>
							</CardHeader>

							<CardContent className="grid gap-3 sm:grid-cols-2">
								<div className="flex items-center gap-3 rounded-lg bg-muted/80 dark:bg-muted/20 px-4 py-3">
									<div>
										<p className="text-muted-foreground text-xs">Date</p>
										<p className="font-mono text-sm font-medium">
											{format(booking.startDate, 'MMM dd, yyyy')}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3 rounded-lg bg-muted/80 dark:bg-muted/20 px-4 py-3">
									<div>
										<p className="text-muted-foreground text-xs">Time</p>
										<p className="font-mono text-sm font-medium">{intervalWithSeparator}</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<BookingSummaryCard booking={booking} />
					</div>

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

												<CardDescription className="text-xs">
													{/* Adjust how much you can send from your balance */}
												</CardDescription>
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
								<Link to={`/support?${supportPageParams}`}>
									<Button className="p-0" variant="link">
										Contact our support team
									</Button>
								</Link>
							</CardContent>
						</Card>
					</aside>
				</div>
			</main>
		</>
	)
}
