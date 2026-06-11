import { ChevronsUpDown, Plus } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	type DataRoleEnumKey,
	type GetApiOrganizations200,
	useGetApiOrganizations,
} from '@/api/generated'
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

const organizationRoleMap: Record<DataRoleEnumKey, string> = {
	MEMBER: 'Member',
	OWNER: 'Owner',
	BILLING: 'Billing',
}

type Organization = GetApiOrganizations200['data'][0]

export function OrganizationSwitcher() {
	const { isMobile } = useSidebar()
	const navigate = useNavigate()

	const { slug: currentOrgSlug } = useParams()

	const { data: organizationsList } = useGetApiOrganizations()

	const activeOrg = organizationsList?.data.find((org) => org.slug === currentOrgSlug)

	if (!activeOrg) {
		return null
	}

	function handleSwitchOrganization(slug: string) {
		navigate(`/organizations/${slug}`)
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				{organizationsList?.data && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<div className="aspect-square w-8">
									<img
										src={activeOrg.avatarUrl ?? undefined}
										alt=""
										className="w-full h-full rounded-lg"
									/>
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
							{organizationsList.data.map((org, index) => (
								<DropdownMenuItem
									key={org.id}
									onClick={() => handleSwitchOrganization(org.slug)}
									className="gap-2 p-2"
								>
									<div className="aspect-square w-8">
										<img
											src={org.avatarUrl ?? undefined}
											alt=""
											className="w-full h-full rounded-lg"
										/>
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
				)}
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
