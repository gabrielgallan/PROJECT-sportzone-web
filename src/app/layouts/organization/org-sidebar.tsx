import { AtSign, Box, ChartArea, HelpCircle, Plus, Tickets } from 'lucide-react'
import { NavLink } from 'react-router-dom'
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
import { OrganizationSwitcher } from './org-switcher'

const sidebarGroups = [
	{
		label: 'Manage',
		items: [
			{
				title: 'Dashboard',
				url: '',
				icon: ChartArea,
			},
			{
				title: 'Courts',
				url: 'courts',
				icon: Box,
			},
			{
				title: 'Bookings',
				url: 'bookings',
				icon: Tickets,
			},
			{
				title: 'Members',
				url: 'members',
				icon: AtSign,
			},
		],
	},
	{
		label: 'Account',
		items: [
			{
				title: 'Support',
				url: 'support',
				icon: HelpCircle,
			},
		],
	},
]

export function OrganizationSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="space-y-2">
				<OrganizationSwitcher />

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
				{sidebarGroups.map((group) => {
					return (
						<SidebarGroup key={group.label}>
							<SidebarGroupLabel>{group.label}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu className="flex flex-col gap-2">
									{group.items.map((item) => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild tooltip={item.title}>
												<NavLink
													to={item.url}
													className={({ isActive }) =>
														isActive ? 'bg-accent text-accent-foreground' : ''
													}
												>
													{item.icon && <item.icon />}
													<span>{item.title}</span>
												</NavLink>
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
