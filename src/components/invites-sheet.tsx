import { useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNowStrict } from 'date-fns'
import { Check, Loader2, TriangleAlert, X } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { toast } from 'sonner'
import {
	type DataRoleEnumKey,
	type GetApiInvites200,
	getApiInvitesQueryKey,
	useGetApiInvites,
	usePatchApiInvitesInviteidAccept,
	usePatchApiInvitesInviteidDecline,
} from '@/api/generated'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
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

type Invite = GetApiInvites200['data'][0]

const inviteRoleMap: Record<DataRoleEnumKey, string> = {
	MEMBER: 'Member',
	BILLING: 'Billing',
	OWNER: 'Owner',
}

const InviteCard = ({ invite }: { invite: Invite }) => {
	const queryClient = useQueryClient()

	const { mutateAsync: acceptInvite, isPending: isAccepting } = usePatchApiInvitesInviteidAccept()
	const { mutateAsync: declineInvite, isPending: isDeclining } = usePatchApiInvitesInviteidDecline()

	async function handleAcceptInvite() {
		try {
			await acceptInvite({ inviteId: invite.id })

			toast.success('Invite accepted')

			await queryClient.invalidateQueries({
				queryKey: getApiInvitesQueryKey(),
			})
		} catch {
			toast.error('Failed to accept invite')
		}
	}

	async function handleDeclineInvite() {
		try {
			await declineInvite({ inviteId: invite.id })

			toast.success('Invite declined')

			await queryClient.invalidateQueries({
				queryKey: getApiInvitesQueryKey(),
			})
		} catch {
			toast.error('Failed to decline invite')
		}
	}

	return (
		<Card>
			<CardHeader className="flex flex-row items-start justify-between gap-4">
				<div className="flex items-center gap-3">
					<img
						src={invite.organization.avatarUrl ?? undefined}
						className="size-9 rounded-full object-cover"
						alt={invite.organization.name}
					/>

					<div>
						<p className="text-sm font-semibold">{invite.organization.name}</p>

						<p className="text-xs text-muted-foreground">
							Invited by {invite.organization.authorName}
						</p>
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

				{invite.status === 'DECLINED' && (
					<span className="flex items-center justify-center w-full gap-2 py-2 border border-muted bg-muted/20 text-xs text-muted-foreground">
						<X className="size-4" />
						Invite declined
					</span>
				)}

				{invite.status === 'ACCEPTED' && (
					<span className="flex items-center justify-center w-full gap-2 py-2 border border-muted bg-muted/20 text-xs text-muted-foreground">
						<Check className="size-4" />
						Invite accepted
					</span>
				)}

				{invite.status === 'PENDING' && (
					<div className="flex gap-2">
						<Button
							onClick={handleAcceptInvite}
							type="button"
							size="sm"
							className="flex-1"
							disabled={isAccepting || isDeclining}
						>
							{isAccepting ? <Loader2 className="size-4 animate-spin" /> : 'Accept'}
						</Button>

						<Button
							onClick={handleDeclineInvite}
							type="button"
							size="sm"
							variant="outline"
							className="flex-1"
							disabled={isAccepting || isDeclining}
						>
							{isDeclining ? <Loader2 className="size-4 animate-spin" /> : 'Decline'}
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

interface InvitesSheetProps {
	children: ReactNode
}

function InvitesSheet({ children }: InvitesSheetProps) {
	const [isSheetOpen, setIsSheetOpen] = useState(false)

	let pendingInvites: number | null = null

	const { data: list, error } = useGetApiInvites()

	if (list) {
		pendingInvites = list.data.filter((invite) => invite.status === 'PENDING').length
	}

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>{children}</SheetTrigger>

			{error && (
				<Alert className="bg-rose-600/10 border-rose-500/20">
					<TriangleAlert />
					<AlertTitle>Sign up failed!</AlertTitle>
					<AlertDescription>
						<p>{error.response?.data.message ?? 'Internal server error'}</p>
					</AlertDescription>
				</Alert>
			)}

			{list && (
				<SheetContent side="right" className="overflow-auto">
					<SheetHeader>
						<SheetTitle>Invites</SheetTitle>
						<SheetDescription>
							You have <span className="text-primary font-medium">{pendingInvites}</span> pending
							invite(s)
						</SheetDescription>
					</SheetHeader>

					<div className="space-y-4 px-4">
						{list.data.map((invite) => (
							<InviteCard key={invite.id} invite={invite} />
						))}
					</div>
				</SheetContent>
			)}
		</Sheet>
	)
}

export { InvitesSheet }
