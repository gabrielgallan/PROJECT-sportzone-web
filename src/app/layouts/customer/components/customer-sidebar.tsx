import { BadgeCheck, BringToFront, HelpCircle, MapPin, Settings, Volleyball } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

const sidebarGroups = [
	{
		label: 'Manage',
		items: [
			{
				title: 'Overview',
				url: '/',
				icon: BringToFront,
			},
			{
				title: 'Discover',
				url: '/discover',
				icon: MapPin,
			},
			{
				title: 'My Bookings',
				url: '/my-bookings',
				icon: BadgeCheck,
			},
		],
	},
	{
		label: 'Account',
		items: [
			{
				title: 'Settings',
				url: '/settings',
				icon: Settings,
			},
			{
				title: 'Support',
				url: '/support',
				icon: HelpCircle,
			},
		],
	},
]

export function CustomerSidebar() {
	const { pathname } = useLocation()

	return (
		<Sidebar>
			<SidebarHeader className="flex pt-3">
				<div className="flex items-center gap-2">
					<Volleyball className="size-6 dark:text-primary" />
					<h1 className="font-bold text-lg">sportzone</h1>
				</div>
			</SidebarHeader>
			<SidebarContent className="flex flex-col gap-4">
				{sidebarGroups.map((group) => {
					return (
						<SidebarGroup key={group.label}>
							<SidebarGroupLabel>{group.label}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu className="flex flex-col gap-2">
									{group.items.map((item) => {
										return (
											<SidebarMenuItem key={item.title}>
												<SidebarMenuButton
													asChild
													tooltip={item.title}
													isActive={
														item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)
													}
												>
													<Link to={item.url}>
														{item.icon && <item.icon />}
														<span>{item.title}</span>
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										)
									})}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					)
				})}
			</SidebarContent>
		</Sidebar>
	)
}
