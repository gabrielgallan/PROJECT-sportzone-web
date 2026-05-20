import { Slash } from 'lucide-react'
import { OrganizationSwitcher } from './organization-switcher'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from './ui/navigation-menu'
import { Link } from 'react-router-dom'

const icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'

export async function Header() {
	return (
		<div className="mx-auto flex max-w-300 items-center justify-between">
			<div className="flex flex-1 items-center gap-3">
				<img width={0} height={0} src={icon} className="size-6 dark:invert" alt="Next" />

				<Slash className="size-3 -rotate-24 text-border" />

				<OrganizationSwitcher />
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
	)
}
