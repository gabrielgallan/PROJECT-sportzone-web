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
import { BadgeCheck, HelpCircle, MapPin, Settings, BringToFront, Volleyball } from 'lucide-react'
import { Link } from 'react-router-dom'

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
				url: '/bookings',
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
				title: 'Help',
				url: '/help',
				icon: HelpCircle,
			},
		],
	},
]

export function CustomerSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex items-center gap-2 p-2">
					<Volleyball size={20} className="text-foregrounddark:text-primary" />
					<h1 className="font-bold text-foreground">sportzone.app</h1>
				</div>
			</SidebarHeader>
			<SidebarContent className="flex flex-col gap-5">
				{sidebarGroups.map((group) => {
					return (
						<SidebarGroup key={group.label}>
							<SidebarGroupLabel>{group.label}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu className="flex flex-col gap-2">
									{group.items.map((item) => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild tooltip={item.title}>
												<Link to={item.url}>
													{item.icon && <item.icon />}
													<span>{item.title}</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					)
				})}
			</SidebarContent>
		</Sidebar>
	)
}
