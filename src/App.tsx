import { HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { router } from './router'

import './index.css'
import { Toaster } from './components/ui/sonner'
import { HeaderContextProvider } from './contexts/header-context'

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider storageKey="sportzone-theme" defaultTheme="dark">
				<Toaster />

				<HeaderContextProvider>
					<RouterProvider router={router} />
				</HeaderContextProvider>
			</ThemeProvider>
		</HelmetProvider>
	)
}
