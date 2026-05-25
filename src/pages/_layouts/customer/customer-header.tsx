import { Bell, Slash } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ProfileMenu } from '@/components/profile-menu'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { HeaderContext } from '@/contexts/header-context'
import { PageBreadcrumb } from '@/components/page-breadcrump'

const user = {
	name: 'Gabriel Gallan',
	email: 'gabriel31@gmail.com',
	avatar: 'https://github.com/gabrielgallan.png',
}

export function CustomerHeader() {
	const { pageTitle } = useContext(HeaderContext)

	return (
		<header className="border-b p-4">
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<SidebarTrigger />

					<Slash className="-rotate-45 text-muted-foreground/45 size-3" />

					<PageBreadcrumb title={pageTitle} />
				</div>
				<div className="flex items-center gap-2">
					<Link to="#" className="p-2 rounded-full hover:bg-muted transition-colors duration-200">
						<Bell className="size-4" />
					</Link>
					<ProfileMenu user={user} />
				</div>
			</div>
		</header>
	)
}
