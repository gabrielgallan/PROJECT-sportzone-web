import { PageTitle } from '@/components/page-title'
import { CardTest } from './components/card'

export function Dashboard() {
	return (
		<>
			<PageTitle title="Dashboard" />
			<div className="space-y-8">
				<div className="grid gap-4 grid-cols-4">
					<CardTest />
					<CardTest />
					<CardTest />
					<CardTest />
				</div>

				<div className="grid grid-cols-9 gap-4"></div>
			</div>
		</>
	)
}
