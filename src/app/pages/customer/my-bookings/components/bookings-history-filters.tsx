import { DateRangePicker } from '@/components/date-range-picker'
import { BookingStatusBadge } from '@/components/booking-status-badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Search, X } from 'lucide-react'
import type { BookingStatus } from '@/types/booking'

const statusOptions: BookingStatus[] = ['pending', 'confirmed', 'completed', 'canceled']

export function BookingsHistoryFilters() {
	return (
		<form>
			<div className="flex flex-col gap-2 md:flex-row md:items-center">
				<Label className="hidden md:flex">Filters</Label>

				<div className="grid grid-cols-2 md:flex gap-2">
					<Input placeholder="Court name" type="text" />

					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Status</SelectLabel>
								<SelectItem value="all">All</SelectItem>
								{statusOptions.map((status) => (
									<SelectItem key={status} value={status}>
										<BookingStatusBadge key={status} status={status} />
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="md:w-fit">
					<DateRangePicker />
				</div>

				<div className="grid grid-cols-2 gap-2 md:flex">
					<Button type="submit" variant="secondary">
						<Search className="size-4" />
						Search
					</Button>

					<Button type="button" variant="ghost">
						<X className="size-4" />
						Clear filters
					</Button>
				</div>
			</div>
		</form>
	)
}
