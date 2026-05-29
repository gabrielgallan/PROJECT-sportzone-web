import { createBrowserRouter } from 'react-router-dom'

// Layouts
import { AuthLayout } from './app/layouts/auth'
import { CustomerLayout } from './app/layouts/customer'
import { OrganizationLayout } from './app/layouts/org'

// Pages
import { NotFound } from '@/app/pages/404'
import { SignInPage } from '@/app/pages/auth/sign-in'
import { SignUpPage } from '@/app/pages/auth/sign-up'
import { OverviewPage } from '@/app/pages/customer/overview'
import { DashboardPage } from '@/app/pages/org/dashboard'
import { DiscoverPage } from '@/app/pages/customer/discover'
import { BookingsPage } from '@/app/pages/customer/my-bookings'
import { ErrorPage } from '@/app/pages/error'
import { CourtDetailsPage } from '@/app/pages/customer/discover/court/[id]'
import { BookingDetailsPage } from '@/app/pages/customer/my-bookings/[id]'
import { SupportPage } from './app/pages/customer/support'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: 'auth/sign-in', element: <SignInPage /> },
			{ path: 'auth/sign-up', element: <SignUpPage /> },
		],
	},
	{
		path: '/',
		element: <CustomerLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <OverviewPage />, handle: { breadcrumb: 'Overview' } },
			{
				path: 'discover',
				handle: { breadcrumb: 'Discover Courts' },
				children: [
					{
						index: true,
						element: <DiscoverPage />,
					},
					{
						path: 'court/:courtId',
						element: <CourtDetailsPage />,
						handle: { breadcrumb: 'Court Details' },
					},
				],
			},
			{
				path: 'my-bookings',
				handle: { breadcrumb: 'My Bookings' },
				children: [
					{
						index: true,
						element: <BookingsPage />,
					},
					{
						path: ':bookingId',
						element: <BookingDetailsPage />,
						handle: { breadcrumb: 'Booking Details' },
					},
				],
			},
			{
				path: 'support',
				handle: { breadcrumb: 'Support center' },
				element: <SupportPage />
			},
		],
	},
	{
		path: '/',
		element: <OrganizationLayout />,
		children: [{ path: 'orgs/dashboard', element: <DashboardPage /> }],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
