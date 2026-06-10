import { createBrowserRouter } from 'react-router-dom'
// Pages
import { NotFoundPage } from '@/app/pages/404'
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
import { GithubCallback } from './app/pages/api/auth/github'
import { GoogleCallback } from './app/pages/api/auth/google'
import { ForgotPasswordPage } from './app/pages/auth/forgot-password'
import { ResetPasswordPage } from './app/pages/auth/reset-password'
import { BookingCheckoutPage } from './app/pages/customer/discover/court/[id]/checkout'
import { PaymentFailedPage } from './app/pages/customer/my-bookings/[id]/payment/failed'
import { PaymentSuccessPage } from './app/pages/customer/my-bookings/[id]/payment/success'
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
			{ path: 'auth/forgot-password', element: <ForgotPasswordPage /> },
			{ path: 'auth/reset-password', element: <ResetPasswordPage /> },
		],
	},
	{
		path: '/',
		element: <CustomerLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <OverviewPage />,
				handle: { breadcrumbs: [{ label: 'Overview' }] },
			},
			{
				path: 'discover',
				handle: { breadcrumbs: [{ label: 'Discover Courts' }] },
				children: [
					{
						index: true,
						element: <DiscoverPage />,
						handle: { breadcrumbs: [{ label: 'Discover Courts' }] },
					},
					{
						path: 'court/:courtId',
						element: <CourtDetailsPage />,
						handle: {
							breadcrumbs: [
								{ label: 'Discover Courts', to: '/discover' },
								{ label: 'Court Details' },
							],
						},
					},
					{
						path: 'court/:courtId/checkout',
						element: <BookingCheckoutPage />,
						handle: {
							breadcrumbs: [
								{ label: 'Discover Courts', to: '/discover' },
								{ label: 'Court Details' },
								{ label: 'Court Checkout' },
							],
						},
					},
				],
			},
			{
				path: 'my-bookings',
				handle: { breadcrumbs: [{ label: 'My Bookings' }] },
				children: [
					{
						index: true,
						element: <BookingsPage />,
						handle: { breadcrumbs: [{ label: 'My Bookings' }] },
					},
					{
						path: ':bookingId',
						element: <BookingDetailsPage />,
						handle: {
							breadcrumbs: [
								{ label: 'My Bookings', to: '/my-bookings' },
								{ label: 'Booking Details' },
							],
						},
					},
					{
						path: ':bookingId/payment/failed',
						element: <PaymentFailedPage />,
						handle: {
							breadcrumbs: [
								{ label: 'My Bookings', to: '/my-bookings' },
								{ label: 'Booking Details' },
								{ label: 'Payment failed' },
							],
						},
					},
					{
						path: ':bookingId/payment/success',
						element: <PaymentSuccessPage />,
						handle: {
							breadcrumbs: [
								{ label: 'My Bookings', to: '/my-bookings' },
								{ label: 'Booking Details' },
								{ label: 'Payment success' },
							],
						},
					},
				],
			},
			{
				path: 'support',
				handle: { breadcrumbs: [{ label: 'Support center' }] },
				element: <SupportPage />,
			},
			{
				path: 'settings',
				handle: { breadcrumbs: [{ label: 'Settings' }] },
				element: <SettingsPage />,
			},
		],
	},
	{
		path: '/organizations/:slug',
		element: <OrganizationLayout />,
		handle: { breadcrumbs: [{ label: 'Organization' }] },
		children: [
			{
				index: true,
				element: <DashboardPage />,
				handle: { breadcrumbs: [{ label: 'Organization' }] },
			},
			{
				path: 'bookings',
				element: <OrganizationBookingsPage />,
				handle: {
					breadcrumbs: [{ label: 'Organization' }, { label: 'Bookings' }],
				},
			},
			{
				path: 'courts',
				element: <OrganizationCourtsPage />,
				handle: {
					breadcrumbs: [{ label: 'Organization' }, { label: 'Courts' }],
				},
			},
			{
				path: 'members',
				element: <OrganizationMembersPage />,
				handle: {
					breadcrumbs: [{ label: 'Organization' }, { label: 'Members' }],
				},
			},
			{
				path: 'support',
				element: <SupportPage />,
				handle: {
					breadcrumbs: [{ label: 'Organization' }, { label: 'Support' }],
				},
			},
		],
	},
	{
		path: '/organizations/:slug',
		element: <OrganizationLayout />,
		children: [
			{
				path: 'settings',
				element: <SettingsPage />,
				handle: {
					breadcrumbs: [{ label: 'Organization' }, { label: 'Profile Settings' }],
				},
			},
		],
	},
	{
		path: '/api/auth/github',
		element: <GithubCallback />,
	},
	{
		path: '/api/auth/google',
		element: <GoogleCallback />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
])
