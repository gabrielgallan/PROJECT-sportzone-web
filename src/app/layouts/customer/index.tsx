import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { CustomerBottomNav } from './components/customer-bottom-nav'
import { CustomerHeader } from './components/customer-header'
import { CustomerSidebar } from './components/customer-sidebar'

export function CustomerLayout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<CustomerSidebar />

					<main className="flex flex-1 flex-col mb-16 md:mb-0">
						<CustomerHeader />
						<Outlet />
					</main>

					<CustomerBottomNav />
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
