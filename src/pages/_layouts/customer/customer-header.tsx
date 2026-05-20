import { Slash, Volleyball } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '../../../components/ui/navigation-menu'

const _icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'

export function CustomerHeader() {
	return (
		<header className="border-b pb-4">
			<div className="mx-auto flex max-w-300 items-center justify-between">
				<div className="flex flex-1 items-center gap-3">
					<Volleyball size={20} className="text-foreground dark:text-primary" />

					<Slash className="size-3 -rotate-24 text-foreground/45" />
				</div>

				<div>
					<NavigationMenu>
						<NavigationMenuList className="space-x-4">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/docs">Overview</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/docs">Discover</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/docs">My Bookings</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	)
}
