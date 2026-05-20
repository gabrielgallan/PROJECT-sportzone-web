import { Outlet } from 'react-router-dom'
import { CustomerHeader } from './customer-header'

export function CustomerLayout() {
	return (
		<div className="space-y-4 py-4">
			<CustomerHeader />

			<Outlet />
		</div>
	)
}
