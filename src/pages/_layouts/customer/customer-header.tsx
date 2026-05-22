import { Volleyball } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '../../../components/ui/navigation-menu'
import { ProfileMenu } from '@/components/profile-menu'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function CustomerHeader() {
	return (
		<header className="border-b p-4">
			<div className="flex items-center justify-between gap-3">
				<SidebarTrigger />
				<div className="flex gap-3 items-center">
					<h1 className="font-bold text-foreground">sportzone.app</h1>
					<Volleyball size={20} className="text-foregrounddark:text-primary" />
				</div>
			</div>
		</header>
	)
}
