import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const courtsFilterFormSchema = z.object({
	name: z.string(),
	status: z.string(),
})

type CourtsFilterFormType = z.infer<typeof courtsFilterFormSchema>

export function CourtsPageFilters() {
	const [searchParams, setSearchParams] = useSearchParams()

	const { register, handleSubmit, control, reset } = useForm<CourtsFilterFormType>({
		resolver: zodResolver(courtsFilterFormSchema),
		defaultValues: {
			name: searchParams.get('name') ?? '',
			status: searchParams.get('status') ?? 'all',
		},
	})

	function handleFilterCourts(data: CourtsFilterFormType) {
		setSearchParams((url) => {
			url.set('name', data.name)

			url.set('status', data.status)

			return url
		})
	}

	function handleClearFilters() {
		setSearchParams((url) => {
			url.delete('name')

			url.delete('status')

			return url
		})

		reset()
	}

	return (
		<form onSubmit={handleSubmit(handleFilterCourts)}>
			<div className="flex gap-2 w-fit">
				<InputGroup>
					<InputGroupInput {...register('name')} placeholder="Court name..." />
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
					<InputGroupAddon align="inline-end">12 results</InputGroupAddon>
				</InputGroup>

				<Controller
					control={control}
					name="status"
					render={({ field }) => (
						<Select onValueChange={field.onChange} value={field.value}>
							<SelectTrigger>
								<SelectValue placeholder="Status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All statuses</SelectItem>
								<SelectItem value="online">Online</SelectItem>
								<SelectItem value="pending">Pending confirmation</SelectItem>
								<SelectItem value="maintenance">Maintenance</SelectItem>
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
