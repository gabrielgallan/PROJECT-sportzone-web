import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign, Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const membersTableFilterFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	role: z.enum(['member', 'owner', 'billing']),
})

type MembersTableFilterFormType = z.infer<typeof membersTableFilterFormSchema>

export function MembersTableFilters() {
	const [_searchParams, setSearchParams] = useSearchParams()

	const { register, handleSubmit, control, reset } = useForm<MembersTableFilterFormType>({
		resolver: zodResolver(membersTableFilterFormSchema),
	})

	function handleFilterMembers(_data: MembersTableFilterFormType) {
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
		<form onSubmit={handleSubmit(handleFilterMembers)}>
			<div className="flex gap-2 w-fit">
				<InputGroup>
					<InputGroupInput {...register('name')} type="text" placeholder="Name..." />
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
				</InputGroup>

				<InputGroup>
					<InputGroupInput {...register('email')} type="email" placeholder="E-mail..." />
					<InputGroupAddon>
						<AtSign />
					</InputGroupAddon>
				</InputGroup>

				<Controller
					control={control}
					name="role"
					render={({ field }) => (
						<Select onValueChange={field.onChange} value={field.value} defaultValue="all">
							<SelectTrigger className="h-9 w-full">
								<SelectValue placeholder="Status" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Role</SelectLabel>
									<SelectItem value="all">All roles</SelectItem>
									<SelectItem value="member">Member</SelectItem>
									<SelectItem value="owner">Owner</SelectItem>
									<SelectItem value="billing">Billing</SelectItem>
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
