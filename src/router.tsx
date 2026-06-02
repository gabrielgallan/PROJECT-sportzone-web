import { createBrowserRouter } from 'react-router-dom'
// Pages
import { NotFound } from '@/app/pages/404'
import { SignInPage } from '@/app/pages/auth/sign-in'
import { SignUpPage } from '@/app/pages/auth/sign-up'
import { DiscoverPage } from '@/app/pages/customer/discover'
import { CourtDetailsPage } from '@/app/pages/customer/discover/court/[id]'
import { BookingsPage } from '@/app/pages/customer/my-bookings'
import { BookingDetailsPage } from '@/app/pages/customer/my-bookings/[id]'
import { OverviewPage } from '@/app/pages/customer/overview'
import { ErrorPage } from '@/app/pages/error'
import { DashboardPage } from '@/app/pages/organization/dashboard'
// Layouts
import { AuthLayout } from './app/layouts/auth'
import { CustomerLayout } from './app/layouts/customer'
import { OrganizationLayout } from './app/layouts/organization'
import { OrganizationBookingsPage } from './app/pages/organization/bookings'
import { OrganizationCourtsPage } from './app/pages/organization/courts'
import { OrganizationMembersPage } from './app/pages/organization/members'
import { SettingsPage } from './app/pages/settings'
import { SupportPage } from './app/pages/support'

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
				element: <SupportPage />,
			},
			{
				path: 'settings',
				handle: { breadcrumb: 'Settings' },
				element: <SettingsPage />,
			},
		],
	},
	{
		path: '/organizations/:slug',
		element: <OrganizationLayout />,
		handle: { breadcrumb: 'Organization' },
		children: [
			{ index: true, element: <DashboardPage /> },
			{
				path: 'bookings',
				element: <OrganizationBookingsPage />,
				handle: { breadcrumb: 'Bookings' },
			},
			{
				path: 'courts',
				element: <OrganizationCourtsPage />,
				handle: { breadcrumb: 'Courts' },
			},
			{
				path: 'members',
				element: <OrganizationMembersPage />,
				handle: { breadcrumb: 'Members' },
			},
			{ path: 'support', element: <SupportPage />, handle: { breadcrumb: 'Support' } },
		],
	},
	{
		path: '/organizations/:slug',
		element: <OrganizationLayout />,
		children: [
			{ path: 'settings', element: <SettingsPage />, handle: { breadcrumb: 'Profile Settings' } },
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
