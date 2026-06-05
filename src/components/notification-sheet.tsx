import { formatDistanceToNowStrict } from 'date-fns'
import { CheckCheck } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

export const notifications: Notification[] = [
	{
		title: 'Booking confirmed',
		description:
			'Your booking at Arena Paulista for May 25 from 18:00 to 19:30 has been successfully confirmed.',
		date: new Date(2026, 4, 25, 19, 0),
		status: 'unread',
		href: 'bookings',
	},
	{
		title: 'Court reservation reminder',
		description:
			'Your match at Prime Padel Club starts in 1 hour. Make sure to arrive a few minutes early.',
		date: new Date(2026, 4, 25, 17, 0),
		status: 'unread',
	},
	{
		title: 'Booking canceled',
		description:
			'Unfortunately, your reservation at Green Field Club was canceled by the organization due to maintenance.',
		date: new Date(2026, 4, 24, 21, 30),
		status: 'read',
	},
	{
		title: 'New court available',
		description:
			'SportZone Arena has opened new evening slots for soccer matches this week near your location.',
		date: new Date(2026, 4, 24, 14, 15),
		status: 'read',
	},
]

type NotificationStatus = 'unread' | 'read'

interface Notification {
	title: string
	description: string
	date: Date
	status: NotificationStatus
	href?: string
}

interface NotificationCardProps {
	notification: Notification
	onSelectNotification: () => void
}

function NotificationCard({ notification, onSelectNotification }: NotificationCardProps) {
	const navigate = useNavigate()

	function handleSelectNotification() {
		if (notification.href) {
			onSelectNotification()

			navigate(notification.href)
		}
	}

	return (
		<Card
			onClick={handleSelectNotification}
			className="hover:bg-muted/25 transition-colors duration-100 cursor-pointer"
		>
			<CardContent>
				<div className="flex flex-col gap-1">
					<div className="flex justify-between">
						<div className="flex items-center gap-2">
							{notification.status === 'unread' && (
								<span className="h-1.5 w-1.5 rounded-full bg-primary" />
							)}
							<span className="text-sm font-medium">{notification.title}</span>
						</div>

						<div>
							<span className="text-xs text-muted-foreground/45">
								{formatDistanceToNowStrict(notification.date, {
									addSuffix: true,
								})}
							</span>
						</div>
					</div>

					<span className="text-xs text-muted-foreground mt-2">{notification.description}</span>
				</div>
			</CardContent>
		</Card>
	)
}

function NotificationsSheet({ children }: NotificationsSheetProps) {
	const [isSheetOpen, setIsSheetOpen] = useState(false)

	const unreadNotifications = notifications.filter((n) => n.status === 'unread').length

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

				<div className="flex flex-col px-4 gap-4">
					<div className="ml-auto">
						<Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
							<CheckCheck className="size-4" />

							<span>Mark all as read</span>
						</Button>
					</div>

					{notifications.map((notification) => (
						<NotificationCard
							key={notification.title}
							notification={notification}
							onSelectNotification={() => setIsSheetOpen(false)}
						/>
					))}
				</div>

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
