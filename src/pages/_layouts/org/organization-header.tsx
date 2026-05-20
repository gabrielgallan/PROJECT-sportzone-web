import { Slash, Volleyball } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../../../components/ui/navigation-menu'
import { OrganizationSwitcher } from './organization-switcher'

const _icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link to={href}>
					<div className="flex flex-col gap-1 text-sm">
						<div className="leading-none font-medium">{title}</div>
						<div className="line-clamp-2 text-muted-foreground">{children}</div>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}

export function OrganizationHeader() {
	return (
		<header className="border-b pb-4">
			<div className="mx-auto flex max-w-300 items-center justify-between">
				<div className="flex flex-1 items-center gap-3">
					<Volleyball size={20} className="text-foreground dark:text-primary" />

					<Slash className="size-3 -rotate-24 text-foreground/45" />

					<OrganizationSwitcher />
				</div>

				<div>
					<NavigationMenu>
						<NavigationMenuList className="space-x-4">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/org">Dashboard</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Manage</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="w-96">
										<ListItem href="/docs" title="Organization courts">
											Re-usable components built with Tailwind CSS.
										</ListItem>
										<ListItem href="/docs/installation" title="Organization bookings">
											How to install dependencies and structure your app.
										</ListItem>
										<ListItem href="/docs/primitives/typography" title="Organization members">
											Styles for headings, paragraphs, lists...etc
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link to="/docs">Notifications</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild active>
									<Link to="/docs">Settings</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	)
}
