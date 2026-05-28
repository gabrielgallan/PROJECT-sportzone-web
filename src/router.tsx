import { createBrowserRouter } from 'react-router-dom'

// Layouts
import { AuthLayout } from './pages/_layouts/auth'
import { CustomerLayout } from './pages/_layouts/customer'
import { OrganizationLayout } from './pages/_layouts/org'

// Pages
import { NotFound } from './pages/404'
import { SignInPage } from './pages/auth/sign-in'
import { SignUpPage } from './pages/auth/sign-up'
import { OverviewPage } from './pages/customer/overview'
import { DashboardPage } from './pages/org/dashboard'
import { DiscoverPage } from './pages/customer/discover'
import { BookingsPage } from './pages/customer/bookings'
import { ErrorPage } from './pages/error'
import { CourtDetailsPage } from './pages/customer/discover/court-details'
import { BookingDetailsPage } from './pages/customer/bookings/booking-details.tsx'

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
				path: 'bookings',
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
