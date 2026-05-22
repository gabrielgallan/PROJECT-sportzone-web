import { OrganizationSwitcher } from '@/components/organization-switcher'
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
import { ArrowRight, GalleryVerticalEnd, LayoutDashboard } from 'lucide-react'
import { Link } from 'react-router-dom'

const user = {
	name: 'Gabriel Gallan',
	email: 'gabriel31@gmail.com',
	avatar: 'https://github.com/gabrielgallan.png',
}

const teams = [
	{
		name: 'Acme Inc',
		logo: GalleryVerticalEnd,
		plan: 'Enterprise',
	},
	{
		name: 'Acme Inc',
		logo: GalleryVerticalEnd,
		plan: 'Enterprise',
	},
]

const sidebar = {
	main: [
		{
			title: 'Dashboard',
			url: '/',
			icon: ArrowRight,
		},
	],
}

export function CustomerSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<OrganizationSwitcher teams={teams} />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Bookings</SidebarGroupLabel>
					<SidebarGroupContent className="flex flex-col gap-2">
						<SidebarMenu>
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
			</SidebarContent>
			<SidebarFooter>
				<ProfileMenu user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}
