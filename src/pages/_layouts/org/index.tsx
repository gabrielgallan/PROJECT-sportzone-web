import { Outlet } from 'react-router-dom'
import { OrganizationHeader } from '@/pages/_layouts/org/org-header'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SidebarProvider } from '@/components/ui/sidebar'
import { OrganizationSidebar } from './org-sidebar'

export function OrganizationLayout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<OrganizationSidebar />

					<div className="flex min-w-0 flex-1 flex-col">
						<OrganizationHeader />

						<main className="flex-1 p-4">
							<Outlet />
						</main>
					</div>
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
