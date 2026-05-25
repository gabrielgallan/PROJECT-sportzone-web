import { PageTitle } from '@/components/page-title'
import { HeaderContext } from '@/contexts/header-context'
import { useContext, useEffect } from 'react'

export function Overview() {
	const { onPageChange } = useContext(HeaderContext)

	useEffect(() => {
		onPageChange('Overview')
	}, [onPageChange])

	return (
		<>
			<PageTitle title="Overview" />
			<div className="space-y-4">
				<h1 className="text-3xl font-bold tracking-tight">Overview</h1>
			</div>
		</>
	)
}
