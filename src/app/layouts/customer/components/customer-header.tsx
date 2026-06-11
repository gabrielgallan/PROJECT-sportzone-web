import { Bell, Mail } from 'lucide-react'
import type { GetApiProfile200 } from '@/api/generated'
import { InvitesSheet } from '@/components/invites-sheet'
import { NotificationsSheet } from '@/components/notification-sheet'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { ProfileMenu } from '@/components/profile-menu'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'

interface CustomerHeaderProps {
	user: GetApiProfile200['user']
}

export function CustomerHeader({ user }: CustomerHeaderProps) {
	const hasNotifications = false
	const hasInvites = true

	return (
		<header className="border-b p-4">
			<div className="flex items-center justify-between gap-2">
				<div className="hidden md:flex w-full items-center gap-2">
					<SidebarTrigger />

					<PageBreadcrumb />
				</div>

				<div className="flex justify-between md:justify-end w-full items-center gap-4">
					<div className="flex gap-1">
						<InvitesSheet>
							<div className="relative">
								<Button
									type="button"
									variant="ghost"
									size="icon"
									className="rounded-full cursor-pointer p-4"
								>
									<Mail className="size-4" />
								</Button>
								{hasInvites && (
									<span className="absolute top-0.5 right-0.5 size-2 rounded-full bg-primary ring-2 ring-background" />
								)}
							</div>
						</InvitesSheet>

						<NotificationsSheet>
							<div className="relative">
								<Button
									type="button"
									variant="ghost"
									size="icon"
									className="rounded-full cursor-pointer p-4"
								>
									<Bell className="size-4" />
								</Button>
								{hasNotifications && (
									<span className="absolute top-0.5 right-0.5 size-2 rounded-full bg-primary ring-2 ring-background" />
								)}
							</div>
						</NotificationsSheet>
					</div>

					<ProfileMenu user={user} />
				</div>
			</div>
		</header>
	)
}
