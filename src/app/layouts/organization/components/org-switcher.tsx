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
import { user } from '@/mocks/user'
import type { Membership, UserRole } from '@/types/organization'

const organizationRoleMap: Record<UserRole, string> = {
	member: 'Member',
	owner: 'Owner',
}

const memberships: Membership[] = [
	{
		id: 'membership-1',
		role: 'owner',
		user,
		organization: {
			id: 'org-1',
			name: 'ISS Brazil',
			slug: 'iss-brazil',
			domain: 'iss.com',
			imageUrl: 'https://github.com/iss-brazil.png',
			courts: [],
			members: [],
		},
	},
	{
		id: 'membership-2',
		role: 'member',
		user,
		organization: {
			id: 'org-2',
			name: 'Rocketseat',
			slug: 'rocketseat',
			domain: 'rocketseat.com',
			imageUrl: 'https://github.com/rocketseat.png',
			courts: [],
			members: [],
		},
	},
]

const currentMembership: Membership = {
	id: 'membership-5',
	role: 'owner',
	user,
	organization: {
		id: 'org-3',
		name: 'Microsoft',
		slug: 'microsoft',
		imageUrl: 'https://github.com/microsoft.png',
		courts: [],
		members: [],
	},
}

export function OrganizationSwitcher() {
	const { isMobile } = useSidebar()
	const [activeMembership, setActiveMembership] = React.useState(currentMembership)

	if (!activeMembership) {
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
							<div className="aspect-square w-8">
								<img
									src={activeMembership.organization.imageUrl}
									alt=""
									className="w-full h-full rounded-lg"
								/>
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{activeMembership.organization.name}</span>
								<span className="text-xs text-foreground/45 font-light">
									{organizationRoleMap[activeMembership.role]}
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
						{memberships.map((ship, index) => (
							<DropdownMenuItem
								key={ship.organization.id}
								onClick={() => setActiveMembership(ship)}
								className="gap-2 p-2"
							>
								<div className="aspect-square w-8">
									<img
										src={ship.organization.imageUrl}
										alt=""
										className="w-full h-full rounded-lg"
									/>
								</div>
								{ship.organization.name}
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
