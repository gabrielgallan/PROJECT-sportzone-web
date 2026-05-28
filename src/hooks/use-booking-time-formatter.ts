import dayjs from 'dayjs'

interface UseFormatBookingIntervalInput {
	startDate: Date
	endDate: Date
}

export function useBookingTimeFormatter({ startDate, endDate }: UseFormatBookingIntervalInput) {
	return {
		intervalWithSeparator: `${dayjs(startDate).format('HH:mm')} - ${dayjs(endDate).format('HH:mm')}`,
	}
}
