import { PageTitle } from '@/components/page-title'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Box, ChevronDown, Users } from 'lucide-react'

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
		<HoverCard openDelay={10} closeDelay={20}>
			<HoverCardTrigger asChild>
				<div className="flex items-center gap-2 group transition-all hover:bg-muted/40 p-1 rounded-lg cursor-pointer">
					<img src={org.imageUrl} alt={org.slug} className="w-10 rounded-lg" />

					<div>
						<p className="text-sm font-medium group-hover:text-primary">{org.name}</p>
						<p className="text-xs text-muted-foreground">{org.role}</p>
					</div>
				</div>
			</HoverCardTrigger>
			<HoverCardContent className="max-w-64 p-0">
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

function EditProfileModal() {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Edit yout profile account</DialogTitle>
			</DialogHeader>

			<form>
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input type="text" id="name" />
				</div>
			</form>
		</DialogContent>
	)
}

export function SettingsPage() {
	return (
		<>
			<PageTitle title="Settings" />
			<main className="mx-auto grid max-w-300 w-full gap-6 py-6 px-4">
				<header className="flex justify-between items-start">
					<div className="space-y-1">
						<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Settings</h1>

						<span className="text-sm md:text-base text-muted-foreground">
							View the details and status of your court reservation for
						</span>
					</div>
				</header>

				<div className="grid gap-6 md:grid-cols-[1fr_22rem]">
					<Card></Card>

					<aside>
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
										{organizations.map((org) => (
											<OrganizationCard key={org.id} org={org} />
										))}

										<div className="flex gap-1 items-center text-xs text-primary cursor-pointer w-fit">
											<span>See 1 more</span>
											<ChevronDown className="size-4" />
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</aside>
				</div>
			</main>
		</>
	)
}
