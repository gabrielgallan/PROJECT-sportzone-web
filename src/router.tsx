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

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		errorElement: <NotFound />,
		children: [
			{ path: '/auth/sign-in', element: <SignIn /> },
			{ path: '/auth/sign-up', element: <SignUp /> },
		],
	},
	{
		path: '/',
		element: <CustomerLayout />,
		children: [
			{ index: true, element: <Overview /> },
			{ path: 'discover', element: <Discover /> }
		],
	},
	{
		path: '/',
		element: <OrganizationLayout />,
		children: [{ path: '/org/dashboard', element: <Dashboard /> }],
	},
])
