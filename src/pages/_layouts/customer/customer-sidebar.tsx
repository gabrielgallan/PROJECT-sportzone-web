import { ProfileMenu } from '@/components/profile-menu'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { BadgeCheck, Bell, HelpCircle, MapPin, Settings, BringToFront } from 'lucide-react'
import { Link } from 'react-router-dom'

const sidebar = {
	main: [
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
	secondary: [
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
}

export function CustomerSidebar() {
	return (
		<Sidebar>
			<SidebarContent className="flex flex-col gap-5">
				<SidebarGroup>
					<SidebarGroupLabel>Bookings</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu className="flex flex-col gap-2">
							{sidebar.main.map((item) => (
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
				<SidebarGroup>
					<SidebarGroupLabel>Account</SidebarGroupLabel>
					<SidebarGroupContent className="flex flex-col gap-2">
						<SidebarMenu className="flex flex-col gap-2">
							{sidebar.secondary.map((item) => (
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
			</SidebarContent>
			<SidebarFooter>
			</SidebarFooter>
		</Sidebar>
	)
}
