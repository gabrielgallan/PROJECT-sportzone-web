import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, RefreshCcw } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import type { GetApiProfile200 } from '@/api/generated'
import { getInitialsFromEmail, getInitialsFromName } from '@/components/profile-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const editProfileFormSchema = z.object({
	name: z.string(),
	email: z.email(),
})

type EditProfileFormType = z.infer<typeof editProfileFormSchema>

interface EditProfileDialogProps {
	user: GetApiProfile200['user']
}

export function EditProfileDialog({ user }: EditProfileDialogProps) {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<EditProfileFormType>({
		resolver: zodResolver(editProfileFormSchema),
		defaultValues: {
			name: user.name ?? '',
			email: user.email,
		},
	})

	function handleEditProfile(_data: EditProfileFormType) {
		return new Promise((resolve) => {
			setTimeout(() => {
				toast.success('Profile edited successfully!')

				resolve(null)
			}, 2000)
		})
	}

	const initials = user.name ? getInitialsFromName(user.name) : getInitialsFromEmail(user.email)

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Your profile</DialogTitle>
			</DialogHeader>

			<form onSubmit={handleSubmit(handleEditProfile)}>
				<div className="flex flex-col gap-4">
					<div className="relative w-fit mx-auto">
						<Avatar className="size-17">
							<AvatarImage src={user.avatarUrl ?? undefined} />
							<AvatarFallback>{initials}</AvatarFallback>
						</Avatar>

						<Button
							type="button"
							className="absolute bottom-0 right-0 flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground ring-2 ring-background hover:bg-primary/90 transition-colors"
						>
							<RefreshCcw className="size-3" />
						</Button>
					</div>

					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input type="text" id="name" {...register('name')} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">E-mail</Label>
						<Input type="email" id="email" {...register('email')} />
					</div>

					<Button disabled={isSubmitting} type="submit" className="w-15 ml-auto">
						{isSubmitting ? <Loader2 className="size-4 animate-spin" /> : 'Save'}
					</Button>
				</div>
			</form>
		</DialogContent>
	)
}
