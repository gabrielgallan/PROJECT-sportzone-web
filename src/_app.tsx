import { HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './router'

import './index.css'
import './styles/leaflet.css'
import './styles/shadcn.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider storageKey="sportzone-theme" defaultTheme="dark">
				<Toaster />

				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ThemeProvider>
		</HelmetProvider>
	)
}
