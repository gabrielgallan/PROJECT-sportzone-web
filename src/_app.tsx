import { HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './router'

import './index.css'
import './styles/leaflet.css'
import './styles/shadcn.css'

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
