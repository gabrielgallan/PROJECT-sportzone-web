import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import z from 'zod'
import { Button } from '@/components/ui/button'
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { CourtWithMetrics } from '@/types/court'

interface CourtManagementModalProps {
	courtWithMetrics: CourtWithMetrics
}

const updateCourtSchema = z.object({
	name: z.string().min(1),
	address: z.string().min(1),
	pricePerHour: z.number(),
})

type UpdateCourtType = z.infer<typeof updateCourtSchema>

export function CourtManagementModal({ courtWithMetrics: court }: CourtManagementModalProps) {
	const { metrics } = court

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<UpdateCourtType>({
		resolver: zodResolver(updateCourtSchema),
	})

	async function handleUpdateCourt(data: UpdateCourtType) {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		console.log(data)
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Manage {court.name}</DialogTitle>
				<DialogDescription>Update court details like name, address and pricing.</DialogDescription>
			</DialogHeader>

			<form className="mt-2" onSubmit={handleSubmit(handleUpdateCourt)}>
				<div className="flex flex-col gap-4">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input type="text" id="name" {...register('name')} defaultValue={court.name} />
						</div>

						<div className="space-y-2">
							<Label htmlFor="address">Address</Label>
							<Input
								type="text"
								id="address"
								{...register('address')}
								defaultValue={court.address}
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="price">Price per hour</Label>
							<Input
								id="price"
								type="number"
								{...register('pricePerHour', { valueAsNumber: true })}
								defaultValue={court.pricePerHour / 100}
							/>
						</div>
					</div>

					<Link to={`${court.id}`}>
						<Button variant="link" size="sm">
							Advanced edit
							<ChevronRight />
						</Button>
					</Link>

					<div className="ml-auto flex gap-1">
						<DialogClose asChild disabled={isSubmitting}>
							<Button variant="ghost">Close</Button>
						</DialogClose>

						<Button type="submit" disabled={isSubmitting} className="w-15">
							{isSubmitting ? <Loader2 className="size-4 animate-spin" /> : 'Save'}
						</Button>
					</div>
				</div>
			</form>
		</DialogContent>
	)
}
