import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock } from 'lucide-react'

export function ResponseTimeCard() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-2">
					<Clock className="size-4 text-muted-foreground" />
					<CardTitle className="text-base">Response time</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium">Email support</p>
						<p className="text-xs text-muted-foreground">Replies within 24h</p>
					</div>
					<Badge variant="secondary">Standard</Badge>
				</div>

				<div className="border-t" />

				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium">Live chat</p>
						<p className="text-xs text-muted-foreground">Mon–Fri, 9am–6pm</p>
					</div>
					<Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">
						Online
					</Badge>
				</div>
			</CardContent>
		</Card>
	)
}
