import { Outlet } from 'react-router-dom'
import { OrganizationHeader } from '@/pages/_layouts/org/organization-header'

export function OrganizationLayout() {
	return (
		<div className="space-y-4 py-4">
			<OrganizationHeader />

			<Outlet />
		</div>
	)
}
