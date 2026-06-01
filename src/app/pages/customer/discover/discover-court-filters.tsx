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
			<div className="flex flex-col gap-3 md:flex-row w-full md:items-center">
				<Label className="hidden md:block">Filters</Label>

				{/* Inputs em grid no mobile */}
				<div className="grid grid-cols-2 gap-2 md:contents">
					<Input placeholder="Court name" type="text" />
					<Input placeholder="Location" type="text" />

					<Select>
						<SelectTrigger className="h-9 w-full">
							<SelectValue placeholder="Sport type" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Sport type</SelectLabel>
								<SelectItem value="all">All</SelectItem>
								<SelectItem value="soccer">Soccer</SelectItem>
								<SelectItem value="volley">Volley</SelectItem>
								<SelectItem value="basketball">Basketball</SelectItem>
								<SelectItem value="football">Football</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					{/* Botões agrupados */}
					<div className="flex gap-2">
						<Button type="submit" variant="secondary" className="flex-1 md:flex-none">
							<Search className="size-4" />
						</Button>

						<Button type="button" variant="secondary" className="flex-1 md:flex-none">
							<LocateIcon className="size-4" />
						</Button>
					</div>
				</div>

				{/* Clear filters — full width no mobile */}
				<Button type="button" variant="ghost" className="w-fit ml-auto">
					<X className="size-4 mr-2" />
					<span className="text-sm">Clear filters</span>
				</Button>
			</div>
		</form>
	)
}
