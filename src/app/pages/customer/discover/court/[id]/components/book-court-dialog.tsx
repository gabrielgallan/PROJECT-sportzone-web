import { zodResolver } from '@hookform/resolvers/zod'
import type { ReactNode } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { DatePicker } from '@/components/date-picker'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import type { Court } from '@/types/court'
import { BookingTimePicker, timeSlotsMock } from './booking-time-picker'

interface BookCourtDialogProps {
	court: Court
	children: ReactNode
}

const bookCourtFormSchema = z.object({
	date: z.date({
		error: 'Please select a booking date.',
	}),
	startTime: z.string().min(1, 'Please select an available time.'),
	duration: z
		.number({
			error: 'Please select how many hours you want to book.',
		})
		.min(1, 'Please select how many hours you want to book.'),
})

type BookCourtFormType = z.infer<typeof bookCourtFormSchema>

export function BookCourtDialog({ court, children }: BookCourtDialogProps) {
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<BookCourtFormType>({
		resolver: zodResolver(bookCourtFormSchema),
		defaultValues: {
			date: new Date(),
			startTime: '',
			duration: 0,
		},
	})

	const _selectedTime = watch('startTime')
	const selectedDuration = watch('duration')

	function handleBookCourt(data: BookCourtFormType) {
		console.log(data)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className="sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>{court.name}</DialogTitle>
					<DialogDescription>Select date and time</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit(handleBookCourt)} className="flex flex-col gap-4">
					<div className="space-y-2">
						<Label>Date</Label>
						<Controller
							control={control}
							name="date"
							render={({ field }) => (
								<DatePicker date={field.value} onDateChange={field.onChange} />
							)}
						/>
						{errors.date?.message ? (
							<p className="text-sm text-destructive">{errors.date.message}</p>
						) : null}
					</div>

					<Controller
						control={control}
						name="startTime"
						render={({ field }) => (
							<BookingTimePicker
								slots={timeSlotsMock}
								selectedSlotTime={field.value || null}
								onSelectTime={(time) => {
									field.onChange(time)
									setValue('duration', 0, { shouldValidate: true })
								}}
								selectedDuration={selectedDuration > 0 ? selectedDuration : null}
								onSelectDuration={(duration) =>
									setValue('duration', duration, { shouldValidate: true })
								}
								timeErrorMessage={errors.startTime?.message}
								durationErrorMessage={errors.duration?.message}
							/>
						)}
					/>

					<div className="flex gap-2">
						<DialogClose asChild>
							<Button type="button" variant="outline">
								Cancel
							</Button>
						</DialogClose>

						<Button type="submit">Continue</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
