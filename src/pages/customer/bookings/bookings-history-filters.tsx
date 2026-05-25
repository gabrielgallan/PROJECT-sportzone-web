import { DateRangePicker } from '@/components/date-range-picker'
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
import type { BookingStatus } from './bookings-history-card'
import { BookingStatusBadge } from './booking-status-badge'

const statusOptions: BookingStatus[] = ['pending', 'confirmed', 'completed', 'canceled']

export function BookingsHistoryFilters() {
	return (
		<form>
			<div className="flex gap-2 items-center w-fit">
				<Label>Filters</Label>

				<Input placeholder="Court name" type="text" />

				<Select>
					<SelectTrigger className="h-8 w-45">
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

				<DateRangePicker />

				<Button type="submit" variant="secondary">
					<Search className="h-4 w-4 mr-2" />
					<span className="text-sm">Search</span>
				</Button>

				<Button type="button" variant="ghost">
					<X className="h-4 w-4 mr-2" />
					<span className="text-sm">Clear filters</span>
				</Button>
			</div>
		</form>
	)
}
