import { Bell, Mail } from 'lucide-react'
import { InvitesSheet } from '@/components/invites-sheet'
import { NotificationsSheet } from '@/components/notification-sheet'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { ProfileMenu } from '@/components/profile-menu'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { user } from '@/mocks/user'

export function OrganizationHeader() {
	const hasNotifications = true

	return (
		<header className="border-b p-4">
			<div className="flex items-center justify-between gap-2">
				<div className="hidden md:flex w-full items-center gap-2">
					<SidebarTrigger />

					<PageBreadcrumb />
				</div>

				<div className="flex justify-between md:justify-end w-full items-center gap-4">
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
							{true && (
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

					<ProfileMenu user={user} organizationLayout />
				</div>
			</div>
		</header>
	)
}
