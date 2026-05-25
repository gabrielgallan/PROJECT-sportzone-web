import { useState, type ReactNode } from 'react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '../ui/sheet'
import { NotificationCard, type Notification } from './notification-card'
import { Link } from 'react-router-dom'
import { CheckCheck } from 'lucide-react'
import { Button } from '../ui/button'

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

export function NotificationsSheet({ children }: NotificationsSheetProps) {
	const [isSheetOpen, setIsSheetOpen] = useState(false)

	const unreadNotifications = notifications.filter((n) => n.status === 'unread').length

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			{children}

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
