import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign, CircleAlert, Loader2 } from 'lucide-react'
import { type ReactNode, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface InviteMemberDialogProps {
	children: ReactNode
}

const inviteFormSchema = z.object({
	email: z.email(),
	role: z.enum(['member', 'billing'], {
		message: 'Invalid role',
	}),
})

type InviteFormType = z.infer<typeof inviteFormSchema>

export function InviteMemberDialog({ children }: InviteMemberDialogProps) {
	const [open, setOpen] = useState(false)

	const {
		control,
		register,
		handleSubmit,
		setError,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<InviteFormType>({
		resolver: zodResolver(inviteFormSchema),
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			role: 'member',
		},
	})

	function handleSendInvite(data: InviteFormType) {
		const returnSuccess = false

		return new Promise((resolve) =>
			setTimeout(() => {
				if (returnSuccess) {
					console.log(data)
					setOpen(false)
					reset()
				} else {
					setError('root', {
						message: 'Method not implemented yet!',
					})
				}

				resolve(null)
			}, 2000)
		)
	}

	useEffect(() => {
		if (open) {
			reset()
		}
	}, [open, reset])

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>{children}</DialogTrigger>

			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<DialogTitle>Invite new member</DialogTitle>

					<DialogDescription>Send an invitation to join this organization</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit(handleSendInvite)}>
					<div className="space-y-4">
						{errors.root && (
							<Alert className="bg-rose-600/10 border-rose-500/20">
								<CircleAlert />
								<AlertTitle className="font-semibold">Service Error</AlertTitle>
								<AlertDescription>
									<p className="text-">{errors.root.message}</p>
								</AlertDescription>
							</Alert>
						)}

						<div className="space-y-2 ">
							<Label htmlFor="email">E-mail</Label>

							<InputGroup>
								<InputGroupInput type="text" {...register('email')} id="email" />
								<InputGroupAddon>
									<AtSign />
								</InputGroupAddon>
							</InputGroup>

							{errors.email && (
								<span className="text-sm font-medium text-rose-500">{errors.email.message}</span>
							)}
						</div>

						<div className="flex flex-col gap-2">
							<Label>Role</Label>

							<Controller
								control={control}
								name="role"
								render={({ field }) => (
									<Select value={field.value} onValueChange={field.onChange}>
										<SelectTrigger className="max-w-30">
											<SelectValue placeholder="Select a role" />
										</SelectTrigger>

										<SelectContent>
											<SelectItem value="member">Member</SelectItem>
											<SelectItem value="billing">Billing</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>

							{errors.role && (
								<span className="text-xs font-medium text-rose-500">{errors.role.message}</span>
							)}
						</div>
					</div>

					<div className="flex mt-2 gap-2 justify-end">
						<DialogClose>
							<Button variant="outline">Cancel</Button>
						</DialogClose>

						<Button disabled={isSubmitting} type="submit" className="w-24">
							{isSubmitting ? <Loader2 className="size-4 animate-spin" /> : 'Send invite'}
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
