import { Building2, ChevronDown, LogOut } from 'lucide-react'

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
			<DropdownMenuTrigger className="flex items-center gap-2 rounded-md outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
				<Avatar className="size-8">
					{user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>

				<div className="hidden md:flex flex-col items-start">
					<span className="text-xs font-medium">{user.name}</span>
					<span className="text-xs  text-muted-foreground">{user.email}</span>
				</div>

				<ChevronDown className="size-4 text-muted-foreground ml-2" />
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-52">
				<div className="md:hidden">
					<div className="px-2 py-1.5">
						<p className="truncate text-sm font-medium">{user.name}</p>
						<p className="truncate text-xs text-muted-foreground">{user.email}</p>
					</div>

					<DropdownMenuSeparator />
				</div>

				<DropdownMenuItem asChild>
					<a href="/organizations">
						<Building2 className="mr-2 size-4" />
						Organizations
					</a>
				</DropdownMenuItem>

				<DropdownMenuItem asChild>
					<a href="/auth/sign-in">
						<LogOut className="mr-2 size-4" />
						Sign Out
					</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
