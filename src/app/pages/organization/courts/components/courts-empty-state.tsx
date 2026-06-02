import { Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CourtsEmptyState() {
	return (
		<Card className="border-dashed">
			<CardHeader className="items-center text-center">
				<div className="rounded-full bg-primary/10 p-3 text-primary">
					<Building2 className="size-5" />
				</div>
				<CardTitle>You do not have any courts yet</CardTitle>
				<CardDescription className="max-w-md">
					Register your first court to start managing schedules, bookings, and availability.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex justify-center">
				<Link to="#">
					<Button>Register first court</Button>
				</Link>
			</CardContent>
		</Card>
	)
}
