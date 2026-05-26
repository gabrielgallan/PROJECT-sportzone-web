import { PageTitle } from '@/components/page-title'
import { Card } from '@/components/ui/card'

export function Overview() {
	return (
		<>
			<PageTitle title="Overview" />
			<div className="flex flex-col gap-4 p-4">
				<div className="grid grid-cols-6 gap-4">
					<Card className="col-span-4 h-50"></Card>
				</div>
			</div>
		</>
	)
}
