import { Box, TriangleAlert, User, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
	type DataRoleEnumKey,
	type GetApiOrganizations200,
	useGetApiOrganizations,
	useGetApiProfile,
} from '@/api/generated'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Separator } from '@/components/ui/separator'
import { EditProfileDialog } from './edit-profile-dialog'

interface OrganizationCardProps {
	org: GetApiOrganizations200['data'][0]
}

function OrganizationCard({ org }: OrganizationCardProps) {
	return (
		<HoverCard openDelay={10} closeDelay={100}>
			<HoverCardTrigger asChild>
				<Link to={`/organizations/${org.slug}`}>
					<div className="flex items-center gap-2 group transition-all hover:bg-muted/40 p-1 rounded-lg cursor-pointer">
						<img src={org.avatarUrl ?? undefined} alt={org.slug} className="w-8 rounded-lg" />

						<div>
							<p className="text-xs font-medium group-hover:text-primary">{org.name}</p>
							<p className="text-xs text-muted-foreground">{roleTextMap[org.role]}</p>
						</div>
					</div>
				</Link>
			</HoverCardTrigger>
			<HoverCardContent className="max-w-64 p-0" side="top">
				<div className="flex p-2 gap-2">
					<img src={org.avatarUrl ?? undefined} alt="" className="w-7.5 rounded-lg" />

					<div className="flex flex-col">
						<span className="text-xs font-medium">{org.name}</span>
						<span className="text-xs text-muted-foreground">@{org.slug}</span>
					</div>
				</div>

				<Separator />

				<div className="flex gap-4 p-2 text-muted-foreground text-xs">
					<div className="flex items-center gap-1">
						<Box className="size-3" />
						<span>3 courts</span>
					</div>
					<div className="flex items-center gap-1">
						<Users className="size-3" />
						<span>11 members</span>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

const roleTextMap: Record<DataRoleEnumKey, string> = {
	BILLING: 'Billing',
	MEMBER: 'Member',
	OWNER: 'Owner',
}

export function ProfileSettingsSidebar() {
	const { data: profile } = useGetApiProfile()
	const { data: orgResponse, error: orgError } = useGetApiOrganizations()

	return (
		<Card>
			{profile?.user ? (
				<>
					<CardHeader className="flex flex-col items-center gap-2 p-2">
						<Avatar className="size-12 border-3 border-transparent outline-2 outline-primary">
							<AvatarImage src={profile.user.avatarUrl ?? undefined} alt="" />
							<AvatarFallback>
								<User />
							</AvatarFallback>
						</Avatar>

						<div className="text-center">
							<CardTitle>{profile.user.name}</CardTitle>
							<CardDescription>{profile.user.email}</CardDescription>
						</div>
					</CardHeader>
					<Separator />
					<CardContent className="space-y-4">
						<Dialog>
							<DialogTrigger asChild>
								<Button className="w-full py-5">Edit profile</Button>
							</DialogTrigger>

							<EditProfileDialog user={profile.user} />
						</Dialog>

						{orgError && (
							<Alert className="bg-rose-600/10 border-rose-500/20">
								<TriangleAlert />
								<AlertTitle>Failed to load organizations!</AlertTitle>
								<AlertDescription>
									<p>{orgError.response?.data.message ?? 'Internal server error'}</p>
								</AlertDescription>
							</Alert>
						)}

						{orgResponse?.data && (
							<div>
								<span className="font-semibold text-base">Organizations</span>

								<div className="mt-2 space-y-2">
									<div>
										{orgResponse.data.map((org) => (
											<OrganizationCard key={org.id} org={org} />
										))}
									</div>
								</div>
							</div>
						)}
					</CardContent>
				</>
			) : (
				<Alert className="bg-rose-600/10 border-rose-500/20">
					<TriangleAlert />
					<AlertTitle>Failed to load profile!</AlertTitle>
				</Alert>
			)}
		</Card>
	)
}
