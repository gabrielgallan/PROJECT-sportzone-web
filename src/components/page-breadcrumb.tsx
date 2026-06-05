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

interface BreadcrumbItem {
	label: string
	to?: string
}

interface RouteHandle {
	breadcrumbs?: BreadcrumbItem[]
}

interface PageBreadcrumbProps {
	className?: string
}

export function PageBreadcrumb({ className }: PageBreadcrumbProps) {
	const matches = useMatches()
	const currentMatchWithBreadcrumbs = [...matches]
		.reverse()
		.find((match) => (match.handle as RouteHandle | undefined)?.breadcrumbs?.length)
	const breadcrumbs = (currentMatchWithBreadcrumbs?.handle as RouteHandle | undefined)?.breadcrumbs ?? []

	if (breadcrumbs.length === 0) {
		return null
	}

	return (
		<Breadcrumb className={className}>
			<BreadcrumbList>
				{breadcrumbs.map((breadcrumb, index) => {
					const isLast = index === breadcrumbs.length - 1

					return (
						<Fragment key={`${breadcrumb.label}-${breadcrumb.to ?? index}`}>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
								) : !breadcrumb.to ? (
									<span className="text-muted-foreground">{breadcrumb.label}</span>
								) : (
									<BreadcrumbLink asChild>
										<Link to={breadcrumb.to}>{breadcrumb.label}</Link>
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
