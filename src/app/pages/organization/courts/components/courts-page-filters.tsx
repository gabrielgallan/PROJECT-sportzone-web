import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function CourtsPageFilters() {
	return (
		<div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_200px_200px]">
			<div className="relative">
				<Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
				<Input placeholder="Search court name" className="pl-9" />
			</div>

			<Select defaultValue="all-statuses">
				<SelectTrigger className="w-full">
					<SelectValue placeholder="All statuses" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all-statuses">All statuses</SelectItem>
					<SelectItem value="active">Active</SelectItem>
					<SelectItem value="draft">Draft</SelectItem>
					<SelectItem value="paused">Paused</SelectItem>
					<SelectItem value="maintenance">Maintenance</SelectItem>
				</SelectContent>
			</Select>

			<Select defaultValue="all-sports">
				<SelectTrigger className="w-full">
					<SelectValue placeholder="All sports" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all-sports">All sports</SelectItem>
					<SelectItem value="football">Football</SelectItem>
					<SelectItem value="padel">Padel</SelectItem>
					<SelectItem value="tennis">Tennis</SelectItem>
					<SelectItem value="basketball">Basketball</SelectItem>
					<SelectItem value="volleyball">Volleyball</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
