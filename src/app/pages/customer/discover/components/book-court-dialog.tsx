import { type ReactNode, useState } from 'react'
import z from 'zod'
import { DatePicker } from '@/components/date-picker'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import type { Court } from '@/types/court'
import { BookingTimePicker, type TimeSlot, timeSlotsMock } from './booking-time-picker'

interface BookCourtDialogProps {
	court: Court
	children: ReactNode
}

const bookCourtFormSchema = z.object({
	date: z.date(),
	startTime: z.string(),
	duration: z.number(),
})

type BookCourtFormType = z.infer<typeof bookCourtFormSchema>

export function BookCourtDialog({ court, children }: BookCourtDialogProps) {
	const [date, setDate] = useState<Date | undefined>(undefined)
	const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null)
	const [selectedDuration, setSelectedDuration] = useState<number | null>(null)

	function handleSelectTimeSlot(slot: TimeSlot) {
		setSelectedTime(slot)

		setSelectedDuration(null)
	}

	function handleBookCourt(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		console.log({
			selectedDuration,
			selectedTime,
			date: date?.toISOString(),
		})
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className="sm:max-w-lg">
				<form onSubmit={handleBookCourt}>
					<DialogHeader>
						<DialogTitle>{court.name}</DialogTitle>
						<DialogDescription>Select date and time</DialogDescription>
					</DialogHeader>

					<div className="space-y-4">
						<div className="space-y-2">
							<Label>Date</Label>
							<DatePicker date={date} onDateChange={setDate} />
						</div>

						<BookingTimePicker
							slots={timeSlotsMock}
							selectedSlot={selectedTime}
							onSelectTime={handleSelectTimeSlot}
							selectedDuration={selectedDuration}
							onSelectDuration={setSelectedDuration}
						/>
					</div>

					<DialogFooter>
						<div className="flex gap-2">
							<DialogClose>
								<Button type="button" variant="outline">
									Cancel
								</Button>
							</DialogClose>

							<Button type="submit">Continue</Button>
						</div>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
