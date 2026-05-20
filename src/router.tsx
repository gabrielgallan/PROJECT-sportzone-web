import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Overview } from './pages/app/overview'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [{ path: '/', element: <Overview /> }],
	},
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{ path: '/sign-in', element: <SignIn /> },
			{ path: '/sign-up', element: <SignUp /> },
		],
	},
])
