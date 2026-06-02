import { PageTitle } from '@/components/page-title'
import { Pagination } from '@/components/pagination'
import { BookingHistoryCard } from './components/booking-history-card'
import { BookingsHistoryFilters } from './components/bookings-history-filters'
import { getBookingsHistoryMock } from '@/mocks/bookings'

const bookingsByDate = getBookingsHistoryMock()

export function BookingsPage() {
	return (
		<>
			<PageTitle title="My Bookings" />

			<div className="flex flex-col p-6 gap-4">
				<BookingsHistoryFilters />

				<div className="flex flex-col gap-2">
					{bookingsByDate.map(({ date, items }) => {
						return (
							<>
								<span className="text-base text-muted-foreground my-2">{date}</span>
								<div className="space-y-4">
									{items.map((booking) => (
										<BookingHistoryCard key={booking.id} booking={booking} />
									))}
								</div>
							</>
						)
					})}
				</div>

				<footer>
					<Pagination pageIndex={0} perPage={8} totalCount={3} onPageChange={() => {}} />
				</footer>
			</div>
		</>
	)
}
