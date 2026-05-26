import { createBrowserRouter } from 'react-router-dom'

// Layouts
import { AuthLayout } from './pages/_layouts/auth'
import { CustomerLayout } from './pages/_layouts/customer'
import { OrganizationLayout } from './pages/_layouts/org'

// Pages
import { NotFound } from './pages/404'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Overview } from './pages/customer/overview'
import { Dashboard } from './pages/org/dashboard'
import { Discover } from './pages/customer/discover'
import { Bookings } from './pages/customer/bookings'
import { ErrorPage } from './pages/error'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: 'auth/sign-in', element: <SignIn /> },
			{ path: 'auth/sign-up', element: <SignUp /> },
		],
	},
	{
		path: '/',
		element: <CustomerLayout />,
		children: [
			{ index: true, element: <Overview />, handle: { breadcrumb: 'Overview' } },
			{ path: 'discover', element: <Discover />, handle: { breadcrumb: 'Discover courts' } },
			{ path: 'bookings', element: <Bookings />, handle: { breadcrumb: 'My Bookings' } },
		],
	},
	{
		path: '/',
		element: <OrganizationLayout />,
		children: [{ path: 'orgs/dashboard', element: <Dashboard /> }],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
