import { Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface DashboardEmptyStateProps {
	title?: string
	description?: string
}

export function DashboardEmptyState({
	title = 'Your organization dashboard is still empty',
	description = 'Add your first court and start receiving reservations to unlock operational insights.',
}: DashboardEmptyStateProps) {
	return (
		<Card className="border-dashed">
			<CardHeader className="items-center text-center">
				<div className="rounded-full bg-primary/10 p-3 text-primary">
					<Building2 className="size-5" />
				</div>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="max-w-md">{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex justify-center">
				<Link to="courts">
					<Button>Register first court</Button>
				</Link>
			</CardContent>
		</Card>
	)
}
