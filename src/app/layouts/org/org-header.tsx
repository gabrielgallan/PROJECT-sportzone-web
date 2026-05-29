import { Slash, Volleyball } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'

interface OrganizationHeaderProps {
	pageTitle?: string
}

export function OrganizationHeader({ pageTitle }: OrganizationHeaderProps) {
	return (
		<header className="border-b p-4">
			<div className="flex items-center justify-between gap-3">
				<div className="flex items-center gap-2">
					<SidebarTrigger />
					{pageTitle && (
						<>
							<Slash className="size-3 -rotate-24 text-border" />
							<p className="font-semibold">{pageTitle}</p>
						</>
					)}
				</div>
				<div className="flex gap-3 items-center">
					<h1 className="font-bold text-foreground">sportzone.app</h1>
					<Volleyball size={20} className="text-foregrounddark:text-primary" />
				</div>
			</div>
		</header>
	)
}
