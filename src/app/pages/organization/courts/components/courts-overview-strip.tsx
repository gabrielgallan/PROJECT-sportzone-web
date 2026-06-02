import { Card, CardContent } from '@/components/ui/card'

const overviewItems = [
	{ label: 'Total courts', value: '12' },
	{ label: 'Active', value: '9' },
	{ label: 'Maintenance', value: '2' },
	{ label: 'Draft', value: '1' },
]

export function CourtsOverviewStrip() {
	return (
		<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
			{overviewItems.map((item) => (
				<Card key={item.label} className="gap-0">
					<CardContent className="space-y-1 py-5">
						<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
							{item.label}
						</p>
						<p className="text-2xl font-semibold tracking-tight">{item.value}</p>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
