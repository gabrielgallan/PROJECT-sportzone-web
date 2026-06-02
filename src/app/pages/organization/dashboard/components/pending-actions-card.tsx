import { AlertCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { OrganizationPendingAction, OrganizationPendingActionPriority } from '@/types/organization-dashboard'

interface PendingActionsCardProps {
	actions: OrganizationPendingAction[]
}

const priorityLabelMap: Record<OrganizationPendingActionPriority, string> = {
	low: 'Low',
	medium: 'Medium',
	high: 'High',
}

const priorityClassMap: Record<OrganizationPendingActionPriority, string> = {
	low: 'bg-muted text-muted-foreground',
	medium: 'bg-amber-500/10 text-amber-600',
	high: 'bg-rose-500/10 text-rose-500',
}

export function PendingActionsCard({ actions }: PendingActionsCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Pending actions</CardTitle>
				<CardDescription>Operational tasks that still need your attention.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				{actions.length ? (
					actions.slice(0, 5).map((action) => (
						<Link
							key={action.id}
							to={action.href}
							className="block rounded-xl border bg-muted/20 p-4 transition-colors hover:bg-muted/40"
						>
							<div className="flex items-start justify-between gap-3">
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<AlertCircle className="size-4 text-amber-500" />
										<p className="text-sm font-medium">{action.title}</p>
									</div>
									<p className="text-xs text-muted-foreground">{action.description}</p>
								</div>
								<div className="flex flex-col items-end gap-2">
									<Badge className={priorityClassMap[action.priority]}>{priorityLabelMap[action.priority]}</Badge>
									<ArrowRight className="size-4 text-muted-foreground" />
								</div>
							</div>
						</Link>
					))
				) : (
					<p className="text-sm text-muted-foreground">No pending actions for the current filters.</p>
				)}
			</CardContent>
		</Card>
	)
}
