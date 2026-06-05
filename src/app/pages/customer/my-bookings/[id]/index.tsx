import { PageTitle } from '@/components/page-title'
import { useBookingTimeFormatter } from '@/hooks/use-booking-time-formatter'
import type { BookingWithCourt } from '@/types/booking'
import { BookingCourtCard } from './components/booking-court-card'
import { BookingDetailsHeader } from './components/booking-details-header'
import { BookingDetailsSidebar } from './components/booking-details-sidebar'
import { BookingScheduleCard } from './components/booking-schedule-card'
import { BookingStatusAlert } from './components/booking-status-alert'
import { BookingSummaryCard } from './components/booking-summary-card'

const bookingWithCourt: BookingWithCourt = {
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
		startDate: bookingWithCourt.startDate,
		endDate: bookingWithCourt.endDate,
	})

	const supportPageParams = new URLSearchParams({
		subject: 'booking',
		issue: `Booking ID: ${bookingWithCourt.id}`,
	})

	return (
		<>
			<PageTitle title="Booking Details" />
			<main className="mx-auto grid max-w-300 w-full gap-6 py-6 px-4">
				<BookingDetailsHeader booking={bookingWithCourt} />

				<BookingStatusAlert status={bookingWithCourt.status} />

				<div className="grid gap-6 lg:grid-cols-[1fr_360px]">
					<div className="grid gap-6">
						<BookingCourtCard booking={bookingWithCourt} />

						<BookingScheduleCard
							booking={bookingWithCourt}
							intervalWithSeparator={intervalWithSeparator}
						/>

						<BookingSummaryCard booking={bookingWithCourt} />
					</div>

					<BookingDetailsSidebar
						booking={bookingWithCourt}
						supportPageSearch={supportPageParams.toString()}
					/>
				</div>
			</main>
		</>
	)
}
