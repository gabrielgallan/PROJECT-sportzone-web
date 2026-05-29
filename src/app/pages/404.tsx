import { Link } from 'react-router-dom'
import { PageTitle } from '@/components/page-title'

export function NotFound() {
	return (
		<>
			<PageTitle title="404" />
			<div className="flex h-screen flex-col items-center justify-center gap-2">
				<h1 className="text-4xl font-bold">Page not found</h1>
				<p className="text-muted-foreground">
					Back to{' '}
					<Link to="/" className="text-primary">
						Dashboard
					</Link>
				</p>
			</div>
		</>
	)
}
