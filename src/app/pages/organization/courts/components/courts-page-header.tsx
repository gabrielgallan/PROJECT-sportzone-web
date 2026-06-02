import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function CourtsPageHeader() {
	return (
		<header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
			<div className="space-y-1.5">
				<h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Courts</h1>
				<p className="max-w-2xl text-sm text-muted-foreground md:text-base">
					Manage your courts, monitor their current status, and keep availability ready for incoming bookings.
				</p>
			</div>

			<Link to="#">
				<Button className="w-full md:w-auto">
					<Plus className="size-4" />
					Register Court
				</Button>
			</Link>
		</header>
	)
}
