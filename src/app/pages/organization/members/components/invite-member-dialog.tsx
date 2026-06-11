import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign, CircleAlert, Loader2, TriangleAlert } from 'lucide-react'
import { type ReactNode, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import z from 'zod'
import { usePostApiOrganizationsOrganizationslugInvites } from '@/api/generated'
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
	role: z.enum(['MEMBER', 'BILLING'], {
		message: 'Invalid role',
	}),
})

type InviteFormType = z.infer<typeof inviteFormSchema>

export function InviteMemberDialog({ children }: InviteMemberDialogProps) {
	const [open, setOpen] = useState(false)

	const { slug: organizationSlug } = useParams<{ slug: string }>()

	if (!organizationSlug) {
		throw new Error('Organization slug is missing')
	}

	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<InviteFormType>({
		resolver: zodResolver(inviteFormSchema),
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			role: 'MEMBER',
		},
	})

	const {
		mutateAsync: inviteMember,
		error: apiError,
		isSuccess,
	} = usePostApiOrganizationsOrganizationslugInvites()

	async function handleSendInvite({ email, role }: InviteFormType) {
		await inviteMember({ organizationSlug, data: { email, role } })

		if (isSuccess) {
			toast('User invited successfully!')
		}
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

				{apiError && (
					<Alert className="bg-rose-600/10 border-rose-500/20">
						<TriangleAlert />
						<AlertTitle>Failed to invite member!</AlertTitle>
						<AlertDescription>
							<p>{apiError.response?.data.message ?? 'Internal server error'}</p>
						</AlertDescription>
					</Alert>
				)}

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
											<SelectItem value="MEMBER">Member</SelectItem>
											<SelectItem value="BILLING">Billing</SelectItem>
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
