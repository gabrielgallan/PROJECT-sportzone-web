import { Card, CardContent } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'
import { useNavigate } from 'react-router-dom'

export type NotificationStatus = 'unread' | 'read'

export interface Notification {
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

export function NotificationCard({ notification, onSelectNotification }: NotificationCardProps) {
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
			className="hover:bg-muted/65 transition-colors duration-100 cursor-pointer"
		>
			<CardContent>
				<div className="flex flex-col">
					<div className="flex justify-between">
						<div className="flex items-center gap-2">
							{notification.status === 'unread' && (
								<span className="h-1.5 w-1.5 rounded-full bg-primary" />
							)}
							<span className="text-sm font-medium">{notification.title}</span>
						</div>

						<div>
							<span className="text-xs text-muted-foreground/45">
								{formatDistanceToNow(notification.date, {
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
