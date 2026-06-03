import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import z from 'zod'
import { BookingStatusBadge } from '@/components/booking-status-badge'
import { DateRangePicker } from '@/components/date-range-picker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import type { BookingStatus } from '@/types/booking'

const bookingsTableFilterFormSchema = z.object({
	courtName: z.string(),
	status: z.string(),
	payment: z.string(),
})

type BookingsTableFilterFormType = z.infer<typeof bookingsTableFilterFormSchema>

const statusOption: BookingStatus[] = ['pending', 'confirmed', 'completed', 'canceled']

export function BookingsTableFilters() {
	const [_searchParams, setSearchParams] = useSearchParams()

	const { register, handleSubmit, control, reset } = useForm<BookingsTableFilterFormType>({
		resolver: zodResolver(bookingsTableFilterFormSchema),
	})

	function handleFilterBookings(_data: BookingsTableFilterFormType) {
		setSearchParams((url) => {
			return url
		})
	}

	function handleClearFilters() {
		setSearchParams((url) => {
			return url
		})

		reset()
	}

	return (
		<form onSubmit={handleSubmit(handleFilterBookings)}>
			<div className="flex gap-2 w-fit">
				<Input placeholder="Court name..." />

				<DateRangePicker />

				<Controller
					control={control}
					name="status"
					render={({ field }) => (
						<Select onValueChange={field.onChange} value={field.value} defaultValue="all">
							<SelectTrigger className="h-9 w-full">
								<SelectValue placeholder="Status" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Status</SelectLabel>
									<SelectItem value="all">All statuses</SelectItem>
									{statusOption.map((option) => (
										<SelectItem key={option} value={option}>
											<BookingStatusBadge status={option} variant="dot" />
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					)}
				/>

				<Controller
					control={control}
					name="payment"
					render={({ field }) => (
						<Select onValueChange={field.onChange} value={field.value}>
							<SelectTrigger className="h-9 w-full">
								<SelectValue placeholder="Payment" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Payment status</SelectLabel>
									<SelectItem value="all">All payments</SelectItem>
									<SelectItem value="pending">Pending</SelectItem>
									<SelectItem value="completed">Paid</SelectItem>
									<SelectItem value="confirmed">Refunded</SelectItem>
									<SelectItem value="canceled">Failed</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					)}
				/>

				<Button variant="secondary" type="submit">
					Search
				</Button>

				<Button variant="ghost" type="button" onClick={handleClearFilters}>
					<X className="size-4" />
					Clean filters
				</Button>
			</div>
		</form>
	)
}
