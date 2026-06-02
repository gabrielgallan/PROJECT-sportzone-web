import { PageTitle } from '@/components/page-title'
import { CardTest } from './components/card'

export function DashboardPage() {
	return (
		<>
			<PageTitle title="Dashboard" />
			<main className="mx-auto grid max-w-300 w-full gap-6 py-6 px-4">
				<div className="grid gap-4 grid-cols-4">
					<CardTest />
					<CardTest />
					<CardTest />
					<CardTest />
				</div>

				<div className="grid grid-cols-9 gap-4"></div>
			</main>
		</>
	)
}
