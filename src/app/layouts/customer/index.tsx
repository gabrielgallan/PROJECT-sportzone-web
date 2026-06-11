import { Navigate, Outlet } from 'react-router-dom'
import { useGetApiProfile } from '@/api/generated'
import { SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { CustomerBottomNav } from './components/customer-bottom-nav'
import { CustomerHeader } from './components/customer-header'
import { CustomerSidebar } from './components/customer-sidebar'

export function CustomerLayout() {
	const { data, error, isLoading } = useGetApiProfile({
		query: {
			retry: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
		},
	})

	if (isLoading) {
		return null
	}

	if (error || !data) {
		return <Navigate to="/auth/sign-in" replace />
	}

	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<CustomerSidebar />

					<main className="flex flex-1 flex-col mb-16 md:mb-0">
						<CustomerHeader user={data.user} />
						<Outlet />
					</main>

					<CustomerBottomNav />
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
