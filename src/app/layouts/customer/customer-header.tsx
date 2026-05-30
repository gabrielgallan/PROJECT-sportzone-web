import { Bell } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ProfileMenu } from '@/components/profile-menu'
import { PageBreadcrumb } from '@/components/page-breadcrump'
import { NotificationsSheet } from '@/components/notification-sheet'
import { Button } from '@/components/ui/button'
import { SheetTrigger } from '@/components/ui/sheet'

const user = {
	name: 'Gabriel Gallan',
	email: 'gabriel31@gmail.com',
	avatar: 'https://github.com/gabrielgallan.png',
}

export function CustomerHeader() {
	const hasNotifications = true

	return (
		<NotificationsSheet>
			<header className="border-b p-4">
				<div className="flex items-center justify-between gap-2">
					<div className="hidden md:flex w-full items-center gap-2">
						<SidebarTrigger />

						<PageBreadcrumb />
					</div>

					<div className="flex justify-between md:justify-end w-full items-center gap-4">
						<SheetTrigger asChild>
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
						</SheetTrigger>

						<ProfileMenu user={user} />
					</div>
				</div>
			</header>
		</NotificationsSheet>
	)
}
