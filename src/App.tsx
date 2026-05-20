import { HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { router } from './router'

import './index.css'
import { Toaster } from './components/ui/sonner'

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider storageKey="sportzone-theme" defaultTheme="dark">
				<Toaster />

				<RouterProvider router={router} />
			</ThemeProvider>
		</HelmetProvider>
	)
}
