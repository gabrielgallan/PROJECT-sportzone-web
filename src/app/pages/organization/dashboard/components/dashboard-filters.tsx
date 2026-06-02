import { useSearchParams } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import type { OrganizationDashboardCourtOption } from '@/types/organization-dashboard'

interface DashboardFiltersProps {
	courts: OrganizationDashboardCourtOption[]
}

export function DashboardFilters({ courts }: DashboardFiltersProps) {
	const [searchParams, setSearchParams] = useSearchParams()

	const period = searchParams.get('period') ?? '30_days'
	const court = searchParams.get('court') ?? 'all'

	function handlePeriodChange(value: string) {
		setSearchParams((url) => {
			url.set('period', value)

			return url
		})
	}

	function handleCourtChange(value: string) {
		setSearchParams((url) => {
			if (value === 'all') {
				url.delete('court')
			} else {
				url.set('court', value)
			}

			return url
		})
	}

	return (
		<div className="flex flex-col gap-3 md:flex-row w-full md:w-fit md:items-center">
			<Label>Filters</Label>

			<div className="grid grid-cols-2 gap-2 md:contents">
				<Select value={period} onValueChange={handlePeriodChange}>
					<SelectTrigger>
						<SelectValue placeholder="Select period" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="today">Today</SelectItem>
						<SelectItem value="7_days">Last 7 days</SelectItem>
						<SelectItem value="30_days">Last 30 days</SelectItem>
					</SelectContent>
				</Select>

				<Select value={court} onValueChange={handleCourtChange}>
					<SelectTrigger>
						<SelectValue placeholder="All courts" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All courts</SelectItem>

						{courts.map((c) => (
							<SelectItem key={c.id} value={c.id}>
								{c.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
