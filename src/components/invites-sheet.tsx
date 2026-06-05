import { formatDistanceToNowStrict } from 'date-fns'
import { X } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet'

interface InvitesSheetProps {
	children: ReactNode
}

interface Invite {
	id: string
	role: 'member' | 'billing'
	status: 'pending' | 'declined'
	organization: {
		id: string
		name: string
		logoUrl: string
	}
	invitedBy: {
		name: string
	}

	createdAt: Date
}

export const invitesMock: Invite[] = [
	{
		id: 'inv-1',
		role: 'member',
		status: 'pending',
		organization: {
			id: 'org-1',
			name: 'Rocketseat',
			logoUrl: 'https://github.com/rocketseat.png',
		},
		invitedBy: {
			name: 'Gabriel Gallan',
		},
		createdAt: new Date(2026, 4, 5),
	},
	{
		id: 'inv-2',
		role: 'billing',
		status: 'declined',
		organization: {
			id: 'org-2',
			name: 'ISS Brasil',
			logoUrl: 'https://github.com/iss-brazil.png',
		},
		invitedBy: {
			name: 'Lucas Mendes',
		},
		createdAt: new Date(),
	},
]

const inviteRoleMap = {
	member: 'Member',
	billing: 'Billing',
}

const InviteCard = ({ invite }: { invite: Invite }) => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-start justify-between gap-4">
				<div className="flex items-center gap-3">
					<img
						src={invite.organization.logoUrl}
						className="size-9 rounded-full object-cover"
						alt={invite.organization.name}
					/>

					<div>
						<p className="text-sm font-semibold">{invite.organization.name}</p>

						<p className="text-xs text-muted-foreground">Invited by {invite.invitedBy.name}</p>
					</div>
				</div>

				<span className="shrink-0 text-xs text-muted-foreground">
					{formatDistanceToNowStrict(invite.createdAt, { addSuffix: true })}
				</span>
			</CardHeader>

			<CardContent className="space-y-4">
				<div className="rounded-lg bg-muted/50 p-3 text-sm">
					<p className="text-muted-foreground">
						You were invited to join this organization as{' '}
						<span className="font-medium text-foreground">{inviteRoleMap[invite.role]}</span>.
					</p>
				</div>

				{invite.status === 'declined' ? (
					<span className="flex items-center justify-center w-full gap-2 py-2 border border-muted bg-muted/20 text-xs text-muted-foreground">
						<X className="size-4" />
						Invite declined
					</span>
				) : (
					<div className="flex gap-2">
						<Button size="sm" className="flex-1">
							Accept
						</Button>

						<Button size="sm" variant="outline" className="flex-1">
							Decline
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

function InvitesSheet({ children }: InvitesSheetProps) {
	const [isSheetOpen, setIsSheetOpen] = useState(false)

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent side="right" className="overflow-auto">
				<SheetHeader>
					<SheetTitle>Invites</SheetTitle>
					<SheetDescription>
						You have <span className="text-primary font-medium">{1}</span> pending invite(s)
					</SheetDescription>
				</SheetHeader>

				<div className="space-y-4 px-4">
					{invitesMock.map((invite) => (
						<InviteCard key={invite.id} invite={invite} />
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export { InvitesSheet }
