import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'

export function AppLayout() {
	return (
		<div className="space-y-4 py-4">
			<Header />

			<Outlet />
		</div>
	)
}
