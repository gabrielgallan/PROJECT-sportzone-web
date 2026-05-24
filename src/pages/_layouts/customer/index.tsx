import { Outlet } from 'react-router-dom'
import { CustomerHeader } from './customer-header'
import { SidebarProvider } from '@/components/ui/sidebar'
import { CustomerSidebar } from './customer-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'

export function CustomerLayout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<CustomerSidebar />

					<div className='w-full'>
						<CustomerHeader />

						<Outlet />
					</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
