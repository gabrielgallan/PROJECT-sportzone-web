import { Hammer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MaintenenceCourtsAmountCard() {
	return (
		<Card className="gap-1 bg-transparent">
			<CardHeader className="flex items-center justify-between">
				<CardTitle className="text-base font-medium text-muted-foreground">
					In Maintenance
				</CardTitle>
				<div className="rounded-lg bg-primary/10 p-2 text-primary">
					<Hammer className="size-4" />
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-1">
				<span className="text-2xl font-bold tracking-tight">1</span>
			</CardContent>
		</Card>
	)
}
