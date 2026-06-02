import { BadgeCheck, BringToFront, HelpCircle, MapPin, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
	{ title: 'Overview', url: '/', icon: BringToFront },
	{ title: 'Discover', url: '/discover', icon: MapPin },
	{ title: 'Bookings', url: '/my-bookings', icon: BadgeCheck },
	{ title: 'Settings', url: '/settings', icon: Settings },
	{ title: 'Help', url: '/support', icon: HelpCircle },
]

export function CustomerBottomNav() {
	const { pathname } = useLocation()

	return (
		<nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background">
			<div className="flex items-center justify-around h-16">
				{navItems.map((item) => {
					const active = pathname === item.url

					return (
						<Link
							key={item.url}
							to={item.url}
							className={cn(
								'flex flex-col items-center gap-1 text-xs px-3 py-2 transition-colors',
								active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
							)}
						>
							<item.icon className={cn('size-5', active && 'fill-primary/20')} />
							<span>{item.title}</span>
						</Link>
					)
				})}
			</div>
		</nav>
	)
}
