import { Fragment } from 'react'
import { Link, useMatches } from 'react-router-dom'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface RouteHandle {
	breadcrumb?: string
}

export function PageBreadcrumb() {
	const matches = useMatches()

	const breadcrumbs = matches
		.filter((match) => {
			const handle = match.handle as RouteHandle | undefined

			return handle?.breadcrumb
		})
		.map((match) => {
			const handle = match.handle as RouteHandle

			return {
				title: handle.breadcrumb,
				path: match.pathname,
			}
		})

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbs.map((breadcrumb, index) => {
					const isLast = index === breadcrumbs.length - 1

					return (
						<Fragment key={breadcrumb.path}>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<Link to={breadcrumb.path}>{breadcrumb.title}</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>

							{!isLast && <BreadcrumbSeparator />}
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
