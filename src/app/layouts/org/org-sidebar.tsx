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
} from '@/components/ui/sidebar'
import {
	AtSign,
	Bell,
	Box,
	ChartArea,
	GalleryVerticalEnd,
	Plus,
	Settings,
	Tickets,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { OrganizationSwitcher, type Organziation } from './org-switcher'

const user = {
	name: 'Gabriel Gallan',
	email: 'gabriel31@gmail.com',
	avatar: 'https://github.com/gabrielgallan.png',
}

const sidebar = {
	main: [
		{
			title: 'Dashboard',
			url: '#',
			icon: ChartArea,
		},
		{
			title: 'Courts',
			url: '/#',
			icon: Box,
		},
		{
			title: 'Bookings',
			url: '#',
			icon: Tickets,
		},
		{
			title: 'Members',
			url: '#',
			icon: AtSign,
		},
	],
	secondary: [
		{
			title: 'Notifications',
			url: '#',
			icon: Bell,
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings,
		},
	],
}

const organizations: Organziation[] = [
	{
		name: 'Acme Inc',
		logo: GalleryVerticalEnd,
		role: 'member',
	},
]

export function OrganizationSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="space-y-2">
				<OrganizationSwitcher organizations={organizations} />
				<SidebarMenuItem className="flex items-center gap-2">
					<SidebarMenuButton
						tooltip="Register Court"
						className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
					>
						<Plus />
						<span className="font-semibold">Register Court</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarHeader>
			<SidebarContent className="flex flex-col gap-5">
				<SidebarGroup>
					<SidebarGroupLabel>Manage</SidebarGroupLabel>
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
					<SidebarGroupLabel>Organization</SidebarGroupLabel>
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
				<ProfileMenu user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}
