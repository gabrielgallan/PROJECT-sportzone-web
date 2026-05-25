import { PageTitle } from '@/components/page-title'
import { BookingHistoryCard } from './bookings-history-card'
import { Pagination } from '@/components/pagination'
import { BookingsHistoryFilters } from './bookings-history-filters'
import { getBookingsHistoryMock } from './mock'
import { useContext, useEffect } from 'react'
import { HeaderContext } from '@/contexts/header-context'

const bookingsByDate = getBookingsHistoryMock()

export function Bookings() {
	const { onPageChange } = useContext(HeaderContext)

	useEffect(() => {
		onPageChange('My Bookings')
	}, [onPageChange])

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
									{items.map(({ court, booking }) => (
										<BookingHistoryCard key={booking.id} court={court} booking={booking} />
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
