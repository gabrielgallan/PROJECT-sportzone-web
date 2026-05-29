import { Outlet } from 'react-router-dom'

import { TooltipProvider } from '@/components/ui/tooltip'
import { SidebarProvider } from '@/components/ui/sidebar'

import { CustomerHeader } from './customer-header'
import { CustomerSidebar } from './customer-sidebar'

export function CustomerLayout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<CustomerSidebar />

					<main className="flex flex-1 flex-col">
						<CustomerHeader />

						<Outlet />
					</main>
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
