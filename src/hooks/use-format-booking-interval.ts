import dayjs from 'dayjs'

interface UseFormatBookingIntervalInput {
	startDate: Date
	endDate: Date
}

export function useFormatBookingInterval({ startDate, endDate }: UseFormatBookingIntervalInput) {
	return {
		interval: `${dayjs(startDate).format('HH:mm')} - ${dayjs(endDate).format('HH:mm')}`,
	}
}
