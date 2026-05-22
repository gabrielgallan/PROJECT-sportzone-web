import { Outlet } from 'react-router-dom'
import { CustomerHeader } from './customer-header'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { CustomerSidebar } from './customer-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'

export function CustomerLayout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<CustomerSidebar />

					<div className="flex min-w-0 flex-1 flex-col">
						<CustomerHeader />

						<main className="flex-1 p-4">
							<Outlet />
						</main>
					</div>
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
