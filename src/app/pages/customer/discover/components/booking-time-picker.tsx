import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAvailableDurations } from '@/hooks/use-avaliable-durations'

export interface TimeSlot {
	id: string
	time: string
	available: boolean
}

export const timeSlotsMock: TimeSlot[] = [
	{ id: '1', time: '08:00', available: true },
	{ id: '2', time: '09:00', available: true },
	{ id: '3', time: '10:00', available: false },
	{ id: '4', time: '11:00', available: false },
	{ id: '5', time: '12:00', available: true },
	{ id: '6', time: '13:00', available: true },
	{ id: '7', time: '14:00', available: true },
	{ id: '8', time: '15:00', available: false },
	{ id: '9', time: '16:00', available: true },
	{ id: '10', time: '17:00', available: true },
	{ id: '11', time: '18:00', available: true },
	{ id: '12', time: '19:00', available: true },
]

const durationOptions = [1, 2, 3, 4, 5, 6]

interface BookingTimePickerProps {
	slots: TimeSlot[]
	selectedSlot: TimeSlot | null
	selectedDuration: number | null
	onSelectTime: (slot: TimeSlot) => void
	onSelectDuration: (duration: number) => void
}

export function BookingTimePicker({
	slots,
	selectedSlot,
	selectedDuration,
	onSelectTime,
	onSelectDuration,
}: BookingTimePickerProps) {
	const avaliableHours = useAvailableDurations({
		slots,
		selectedSlot,
		durationOptions,
	})

	return (
		<div className="space-y-4">
			<div className="space-y-3">
				<Label>Available times</Label>

				<div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
					{slots.map((slot) => (
						<Button
							key={slot.id}
							type="button"
							className="rounded cursor-pointer"
							variant={slot.id === selectedSlot?.id ? 'default' : 'outline'}
							disabled={!slot.available}
							onClick={() => onSelectTime(slot)}
						>
							{slot.time}
						</Button>
					))}
				</div>
			</div>

			<div className="space-y-3">
				<Label>Duration</Label>

				<div className="grid grid-cols-4 gap-2">
					{avaliableHours.map((option) => (
						<Button
							key={option.hours}
							type="button"
							variant={selectedDuration === option.hours ? 'default' : 'outline'}
							className="rounded cursor-pointer"
							disabled={!option.available}
							onClick={() => onSelectDuration(option.hours)}
						>
							{option.hours}h
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}
