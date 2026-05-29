import { Building2, MapPin } from 'lucide-react'
import dayjs from 'dayjs'
import { formatDistanceToNowStrict } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import type { BookingWithCourt } from '@/types/booking'

interface NextBookingCardProps {
	booking: BookingWithCourt
}

export function NextBookingCard({ booking }: NextBookingCardProps) {
	const bookingDate = dayjs(booking.startDate).format('dddd, DD MMM')

	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startDate,
		endDate: booking.endDate,
	})

	return (
		<Card className="overflow-hidden pb-0 md:pb-4">
			<div className="flex flex-col lg:flex-row">
				<div className="flex flex-col gap-2">
					<CardHeader>
						<CardDescription className="text-xs flex items-center gap-2">
							<span className="inline-block h-3 w-0.5 rounded-full bg-primary animate-pulse" />
							Your next book will start{' '}
							{formatDistanceToNowStrict(booking.startDate, {
								addSuffix: true,
							})}
						</CardDescription>
					</CardHeader>

					<CardContent className="flex flex-1 flex-col justify-between">
						<div className="space-y-5">
							<div>
								<h3 className="text-xl font-semibold">{booking.court.name}</h3>

								<div className="flex flex-col mt-3 gap-2 text-sm text-muted-foreground">
									<div className="flex items-center gap-2">
										<Building2 className="size-4" />
										<span>{booking.court.org}</span>
									</div>

									<div className="flex items-center gap-2">
										<MapPin className="size-4" />
										<span>{booking.court.address}</span>
									</div>
								</div>
							</div>

							<p className="text-sm">{dayjs(booking.startDate).format('DD MMM • HH:mm')}</p>

							<div className="grid gap-2">
								<Button>View booking</Button>

								{/* <Button variant="ghost">Discover courts</Button> */}
							</div>
						</div>
					</CardContent>
				</div>

				<div className="lg:w-[320px] md:ml-auto">
					<div className="h-full overflow-hidden lg:rounded-l-3xl">
						<img
							alt=""
							src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1470&auto=format&fit=crop"
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</Card>
	)
}
