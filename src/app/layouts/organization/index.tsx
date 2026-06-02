import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { OrganizationHeader } from './components/org-header'
import { OrganizationSidebar } from './components/org-sidebar'

export function OrganizationLayout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<OrganizationSidebar />

					<main className="flex flex-1 flex-col mb-16 md:mb-0">
						<OrganizationHeader />

						<Outlet />
					</main>
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
