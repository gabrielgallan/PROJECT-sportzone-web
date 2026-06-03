import { format } from 'date-fns'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface DatePickerProps {
	date: Date | undefined
	onDateChange: (date: Date) => void
}

export function DatePicker({ date, onDateChange }: DatePickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					data-empty={!date}
					className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
				>
					{date ? format(date, 'PPP') : <span>Pick a date</span>}
					<ChevronDownIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="end">
				<Calendar
					required
					mode="single"
					selected={date}
					onSelect={onDateChange}
					defaultMonth={date}
				/>
			</PopoverContent>
		</Popover>
	)
}
