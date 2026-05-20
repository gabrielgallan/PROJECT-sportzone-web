import { PageTitle } from '@/components/page-title'
import { CardTest } from './components/card'

export function Overview() {
	return (
		<>
			<PageTitle title="Overview" />
			<div className="max-w-300 mx-auto space-y-4">
				<h1 className="text-3xl font-bold tracking-tight">Overview</h1>

				<div className="grid grid-cols-4 gap-4">
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
