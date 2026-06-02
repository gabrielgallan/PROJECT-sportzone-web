import { Outlet } from 'react-router-dom'

import { TooltipProvider } from '@/components/ui/tooltip'
import { SidebarProvider } from '@/components/ui/sidebar'

import { CustomerHeader } from './customer-header'
import { CustomerSidebar } from './customer-sidebar'
import { CustomerBottomNav } from './curtomer-bottom-nav'

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
