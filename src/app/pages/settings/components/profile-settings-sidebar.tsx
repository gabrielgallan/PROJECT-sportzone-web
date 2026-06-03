import { zodResolver } from '@hookform/resolvers/zod'
import { Box, ChevronDown, Loader2, RefreshCcw, Users } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import z from 'zod'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const user = {
	name: 'Gabriel Gallan',
	username: '@gabrielgallan',
	email: 'gabriel31.gal@gmail.com',
	avatarUrl: 'https://github.com/gabrielgallan.png',
}

const organizations = [
	{
		id: '1',
		name: 'Rocketseat',
		slug: 'rocketseat',
		role: 'owner',
		imageUrl: 'https://github.com/rocketseat.png',
		membersAmount: 13,
		courtsAmount: 9,
	},
	{
		id: '2',
		name: 'ISS Brazil',
		slug: 'iss-brazil',
		role: 'member',
		imageUrl: 'https://github.com/iss-brazil.png',
		membersAmount: 9,
		courtsAmount: 37,
	},
]

interface OrganizationCardProps {
	org: {
		name: string
		slug: string
		role: string
		imageUrl: string
		membersAmount: number
		courtsAmount: number
	}
}

function OrganizationCard({ org }: OrganizationCardProps) {
	return (
		<HoverCard openDelay={10} closeDelay={100}>
			<HoverCardTrigger asChild>
				<Link to={`/organizations/${org.slug}`}>
					<div className="flex items-center gap-2 group transition-all hover:bg-muted/40 p-1 rounded-lg cursor-pointer">
						<img src={org.imageUrl} alt={org.slug} className="w-8 rounded-lg" />

						<div>
							<p className="text-xs font-medium group-hover:text-primary">{org.name}</p>
							<p className="text-xs text-muted-foreground">{org.role}</p>
						</div>
					</div>
				</Link>
			</HoverCardTrigger>
			<HoverCardContent className="max-w-64 p-0" side="top">
				<div className="flex p-2 gap-2">
					<img src={org.imageUrl} alt="" className="w-7.5 rounded-lg" />

					<div className="flex flex-col">
						<span className="text-xs font-medium">{org.name}</span>
						<span className="text-xs text-muted-foreground">@{org.slug}</span>
					</div>
				</div>

				<Separator />

				<div className="flex gap-4 p-2 text-muted-foreground text-xs">
					<div className="flex items-center gap-1">
						<Box className="size-3" />
						<span>{org.courtsAmount} courts</span>
					</div>
					<div className="flex items-center gap-1">
						<Users className="size-3" />
						<span>{org.membersAmount} members</span>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

const updateProfileFormSchema = z.object({
	name: z.string(),
	email: z.email(),
})

type UpdateProfileFormType = z.infer<typeof updateProfileFormSchema>

function EditProfileModal() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<UpdateProfileFormType>({
		resolver: zodResolver(updateProfileFormSchema),
		defaultValues: {
			name: user.name,
			email: user.email,
		},
	})

	function handleUpdateProfile(_data: UpdateProfileFormType) {
		return new Promise((resolve) => {
			setTimeout(() => {
				toast.success('Profile edited successfully!')

				resolve(null)
			}, 2000)
		})
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Your profile</DialogTitle>
			</DialogHeader>

			<form onSubmit={handleSubmit(handleUpdateProfile)}>
				<div className="flex flex-col gap-4">
					<div className="relative w-fit mx-auto">
						<Avatar className="size-17">
							<AvatarImage src={user.avatarUrl} alt={user.username} />
							<AvatarFallback>GG</AvatarFallback>
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

export function ProfileSettingsSidebar() {
	return (
		<Card>
			<CardHeader className="flex flex-col items-center gap-2 p-2">
				<Avatar className="size-12 border-3 border-transparent outline-2 outline-primary">
					<AvatarImage src={user.avatarUrl} alt={user.username} />
					<AvatarFallback>GG</AvatarFallback>
				</Avatar>

				<div className="text-center">
					<CardTitle>{user.name}</CardTitle>
					<CardDescription>{user.username}</CardDescription>
				</div>
			</CardHeader>
			<Separator />
			<CardContent className="space-y-4">
				<Dialog>
					<DialogTrigger asChild>
						<Button className="w-full py-5">Edit profile</Button>
					</DialogTrigger>

					<EditProfileModal />
				</Dialog>

				<div>
					<span className="font-semibold text-base">Organizations</span>

					<div className="mt-2 space-y-2">
						<div>
							{organizations.map((org) => (
								<OrganizationCard key={org.id} org={org} />
							))}
						</div>

						<div className="flex gap-1 items-center text-xs text-primary cursor-pointer w-fit">
							<span>See 1 more</span>
							<ChevronDown className="size-4" />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
