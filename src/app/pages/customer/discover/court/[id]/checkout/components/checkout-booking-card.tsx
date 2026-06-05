import { format } from 'date-fns'
import { Building2, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import type { BookingWithCourt } from '@/types/booking'

export function CheckoutBookingCard({ booking }: { booking: BookingWithCourt }) {
	const { intervalWithSeparator } = useBookingTimeFormatter({
		startDate: booking.startDate,
		endDate: booking.endDate,
	})

	return (
		<Card className="overflow-hidden py-0 shadow-sm">
			<CardContent className="grid p-0 lg:grid-cols-[1.15fr_0.85fr]">
				<div className="relative min-h-70 overflow-hidden">
					<img
						src={booking.court.imageUrl}
						alt={booking.court.name}
						className="absolute inset-0 size-full object-cover"
					/>

					<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />

					<div className="relative h-full flex min-h-70 flex-col justify-end gap-4 p-6 text-white">
						<div className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-medium backdrop-blur-sm">
							Booking summary
						</div>

						<div className="space-y-3">
							<div>
								<h2 className="text-3xl font-semibold tracking-tight">{booking.court.name}</h2>

								<div className="mt-2 flex items-center gap-2 text-sm text-white/80">
									<Building2 className="size-4" />
									<span>{booking.court.org.name}</span>
								</div>
							</div>

							<div className="flex items-start gap-2 text-sm leading-relaxed text-white/85">
								<MapPin className="mt-0.5 size-4 shrink-0" />
								<span>{booking.court.address}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="grid gap-4 p-6">
					<div className="space-y-2">
						<h1 className="text-2xl font-semibold tracking-tight">
							{format(booking.startDate, 'EEEE, MMM dd')}
						</h1>
						<p className="text-sm text-muted-foreground">
							Review your selected court and schedule before confirming.
						</p>
					</div>

					<div className="grid gap-3 text-muted-foreground text-xs">
						<div className="flex flex-col gap-1 bg-muted dark:bg-muted/20 rounded-xs border-l-3 border-primary px-4 py-3">
							<p>Date</p>
							<p className="font-mono font-medium text-foreground text-sm">
								{format(booking.startDate, 'MMM dd, yyyy')}
							</p>
						</div>

						<div className="flex flex-col gap-1 bg-muted dark:bg-muted/20 rounded-xs border-l-3 border-primary px-4 py-3">
							<p>Time</p>
							<p className="font-mono font-medium text-foreground text-sm">
								{intervalWithSeparator}
							</p>
						</div>
					</div>

					<div className="rounded-xl border border-dashed bg-background px-4 py-3">
						<p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
							What happens next
						</p>
						<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
							After confirmation, your booking summary will be ready for payment and support
							follow-up if needed.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
