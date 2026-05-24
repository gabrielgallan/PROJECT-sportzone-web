import { Bell, Slash, Volleyball } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ProfileMenu } from '@/components/profile-menu'
import { Link } from 'react-router-dom'

interface CustomerHeaderProps {
	pageTitle?: string
}

const user = {
	name: 'Gabriel Gallan',
	email: 'gabriel31@gmail.com',
	avatar: 'https://github.com/gabrielgallan.png',
}

export function CustomerHeader({ pageTitle }: CustomerHeaderProps) {
	return (
		<header className="border-b p-4">
			<div className="flex items-center justify-between gap-3">
				<div className="flex items-center gap-2">
					<SidebarTrigger />

					<Slash className='-rotate-45 opacity-20 size-3' />

					<Volleyball size={20} className="text-foregrounddark:text-primary" />
					<h1 className="font-bold text-foreground">sportzone.app</h1>
				</div>
				<div className='flex items-center gap-2'>
					<Link to="#" className='bg-muted p-2 rounded-full hover:bg-primary'>
						<Bell className='size-4' />
					</Link>
					<ProfileMenu user={user} />
				</div>
			</div>
		</header>
	)
}
