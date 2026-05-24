import { Building2, ChevronDown, ChevronsUpDown, LogOut } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function getInitials(name: string): string {
	return name
		.trim()
		.split(' ')
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase())
		.slice(0, 2)
		.join('')
}

interface User {
	name: string
	email: string
	avatar?: string | null
}

interface ProfileMenuProps {
	user: User
}

export function ProfileMenu({ user }: ProfileMenuProps) {
	const initials = user.name ? getInitials(user.name) : 'U'

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-3 rounded-md outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">

				<Avatar className="size-8">
					{user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>
				<ChevronDown className="size-4 text-muted-foreground" />
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-52">
				<div className="px-2 py-1.5">
					<p className="truncate text-sm font-medium">{user.name}</p>
					<p className="truncate text-xs text-muted-foreground">{user.email}</p>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<a href="/organizations">
						<Building2 className="mr-2 size-4" />
						Organizations
					</a>
				</DropdownMenuItem>

				<DropdownMenuItem asChild>
					<a href="/api/auth/sign-out">
						<LogOut className="mr-2 size-4" />
						Sign Out
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}