import type { TimeSlot } from '@/app/pages/customer/discover/court/[id]/components/booking-time-picker'

export interface DurationOption {
	hours: number
	available: boolean
}

interface UseAvailableDurationsParams {
	slots: TimeSlot[]
	selectedSlot: TimeSlot | null
	durationOptions: number[]
}

export function useAvailableDurations({
	slots,
	selectedSlot,
	durationOptions,
}: UseAvailableDurationsParams): DurationOption[] {
	if (!selectedSlot) {
		return durationOptions.map((hours) => ({
			hours,
			available: false,
		}))
	}

	const selectedSlotIndex = slots.findIndex((slot) => slot.id === selectedSlot.id)

	if (selectedSlotIndex === -1) {
		return durationOptions.map((hours) => ({
			hours,
			available: false,
		}))
	}

	return durationOptions.map((hours) => {
		const range = slots.slice(selectedSlotIndex, selectedSlotIndex + hours)

		const hasFullRange = range.length === hours
		const isRangeAvailable = range.every((slot) => slot.available)

		return {
			hours,
			available: hasFullRange && isRangeAvailable,
		}
	})
}
