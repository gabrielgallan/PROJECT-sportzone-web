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
import { LocateIcon, Search, X } from 'lucide-react'

export function DiscoverCourtFilters() {
	return (
		<form>
			<div className="flex gap-2 items-center w-fit">
				<Label>Filters</Label>

				<Input placeholder="Court name" type="text" />

				<Input placeholder="Location" type="text" />

				<Select>
					<SelectTrigger className="h-8 w-45">
						<SelectValue placeholder="Sport type" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Sport type</SelectLabel>
							<SelectItem value="all">All</SelectItem>
							<SelectItem value="pending">Soccer</SelectItem>
							<SelectItem value="canceled">Volley</SelectItem>
							<SelectItem value="processing">Basketball</SelectItem>
							<SelectItem value="delivering">Football</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<Button type="submit" variant="secondary">
					<Search className="h-4 w-4" />
				</Button>

				<Button type="submit" variant="secondary">
					<LocateIcon className="h-4 w-4" />
				</Button>

				<Button type="button" variant="ghost">
					<X className="h-4 w-4 mr-2" />
					<span className="text-sm">Clear filters</span>
				</Button>
			</div>
		</form>
	)
}
