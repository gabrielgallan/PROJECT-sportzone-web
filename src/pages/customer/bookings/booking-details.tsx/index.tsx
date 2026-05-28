import { useParams } from 'react-router-dom'

export function BookingDetailsPage() {
	const { bookingId } = useParams()

	return (
		<>
			<h1>Booking ID: {bookingId}</h1>
		</>
	)
}
