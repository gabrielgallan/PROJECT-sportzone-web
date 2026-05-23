import { ChevronsUpDown, Plus } from 'lucide-react'
import * as React from 'react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar'

type Role = 'member' | 'owner'

export interface Organziation {
	name: string
	logo: React.ElementType
	role: Role
}

interface OrganizationSwitcherProps {
	organizations: Organziation[]
}

const organizationRoleMap: Record<Role, string> = {
	member: 'Member',
	owner: 'Owner',
}

export function OrganizationSwitcher({ organizations }: OrganizationSwitcherProps) {
	const { isMobile } = useSidebar()
	const [activeOrg, setActiveOrg] = React.useState(organizations[0])

	if (!activeOrg) {
		return null
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<activeOrg.logo className="size-4" />
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{activeOrg.name}</span>
								<span className="text-xs text-foreground/45 font-light">
									{organizationRoleMap[activeOrg.role]}
								</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						align="start"
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className="text-xs text-muted-foreground">
							Organizations
						</DropdownMenuLabel>
						{organizations.map((org, index) => (
							<DropdownMenuItem
								key={org.name}
								onClick={() => setActiveOrg(org)}
								className="gap-2 p-2"
							>
								<div className="flex size-6 items-center justify-center rounded-md border">
									<org.logo className="size-3.5 shrink-0" />
								</div>
								{org.name}
								<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem className="gap-2 p-2">
							<div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
								<Plus className="size-4" />
							</div>
							<div className="font-medium text-muted-foreground">New organization</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
