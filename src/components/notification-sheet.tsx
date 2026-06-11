import { useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNowStrict } from 'date-fns'
import { CheckCheck, Loader2, TriangleAlert } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import {
	type GetApiNotifications200,
	getApiNotificationsQueryKey,
	useGetApiNotifications,
	usePostApiNotificationsReadAll,
} from '@/api/generated'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet'

interface NotificationsSheetProps {
	children: ReactNode
}

interface NotificationCardProps {
	notification: GetApiNotifications200['data'][0]
}

function NotificationCard({ notification }: NotificationCardProps) {
	return (
		<Card className=" hover:bg-muted/5 cursor-pointer">
			<CardContent>
				<div className="flex flex-col gap-1">
					<div className="flex justify-between">
						<div className="flex items-center gap-2">
							{notification.readAt === null && (
								<span className="h-1.5 w-1.5 rounded-full bg-primary" />
							)}
							<span className="text-sm font-medium">{notification.title}</span>
						</div>

						<div>
							<span className="text-xs text-muted-foreground/45">
								{formatDistanceToNowStrict(notification.createdAt, {
									addSuffix: true,
								})}
							</span>
						</div>
					</div>

					<span className="text-xs text-muted-foreground mt-2">{notification.content}</span>
				</div>
			</CardContent>
		</Card>
	)
}

function NotificationsSheet({ children }: NotificationsSheetProps) {
	const [isSheetOpen, setIsSheetOpen] = useState(false)
	const queryClient = useQueryClient()

	let unreadNotifications: number | null = null

	const { data: notificationsList, error: apiError } = useGetApiNotifications()

	const { mutateAsync: readAllNotifications, isPending } = usePostApiNotificationsReadAll()

	if (notificationsList) {
		unreadNotifications = notificationsList.data.filter((n) => n.readAt === null).length
	}

	async function handleMarkAllAsRead() {
		try {
			await readAllNotifications()

			await queryClient.invalidateQueries({
				queryKey: getApiNotificationsQueryKey(),
			})
		} catch {
			toast.error('Failed to mark all as read! Try again later.')
		}
	}

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent side="right" className="overflow-auto">
				<SheetHeader>
					<SheetTitle>Notifications</SheetTitle>
					<SheetDescription>
						You have <span className="text-primary font-medium">{unreadNotifications}</span> unread
						notification(s)
					</SheetDescription>
				</SheetHeader>

				{apiError && (
					<Alert className="bg-rose-600/10 border-rose-500/20">
						<TriangleAlert />
						<AlertTitle>Request failed!</AlertTitle>
						<AlertDescription>
							<p>{apiError.response?.data.message ?? 'Internal server error'}</p>
						</AlertDescription>
					</Alert>
				)}

				{notificationsList && (
					<div className="flex flex-col px-4 gap-4">
						<div className="ml-auto">
							<Button
								disabled={isPending}
								onClick={handleMarkAllAsRead}
								variant="ghost"
								size="sm"
								className="text-muted-foreground hover:text-primary"
							>
								{isPending ? (
									<Loader2 className="size-4 animate-spin mx-auto" />
								) : (
									<>
										<CheckCheck className="size-4" /> Mark all as read
									</>
								)}
							</Button>
						</div>

						{notificationsList.data.map((notification) => (
							<NotificationCard key={notification.id} notification={notification} />
						))}
					</div>
				)}

				<SheetFooter>
					<Link to="#">
						<span className="text-xs text-primary font-medium hover:text-primary/85">
							View all notifications
						</span>
					</Link>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export { NotificationsSheet }
