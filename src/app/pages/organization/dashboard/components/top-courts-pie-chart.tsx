import { Pie, PieChart, Sector } from 'recharts'
import type { PieSectorShapeProps } from 'recharts/types/polar/Pie'

import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'

const CHART_COLORS = [
	'var(--chart-1)',
	'var(--chart-2)',
	'var(--chart-3)',
	'var(--chart-4)',
	'var(--chart-5)',
]

interface CourtBooking {
	courtName: string
	bookingsCount: number
}

interface TopCourtsPieChartProps {
	data?: CourtBooking[]
	activeIndex?: number
}

const data: CourtBooking[] = [
	{
		courtName: 'Arena A',
		bookingsCount: 29,
	},
	{
		courtName: 'Arena B',
		bookingsCount: 24,
	},
	{
		courtName: 'Arena C',
		bookingsCount: 18,
	},
	{
		courtName: 'Arena D',
		bookingsCount: 34,
	},
]

export function TopCourtsPieChart({ activeIndex = 0 }: TopCourtsPieChartProps) {
	const chartData = data.map((item, index) => ({
		court: item.courtName,
		bookings: item.bookingsCount,
		fill: CHART_COLORS[index % CHART_COLORS.length],
	}))

	const chartConfig: ChartConfig = {
		bookings: { label: 'Reservas' },
		...Object.fromEntries(
			data.map((item, index) => [
				item.courtName,
				{
					label: item.courtName,
					color: CHART_COLORS[index % CHART_COLORS.length],
				},
			])
		),
	} satisfies ChartConfig

	return (
		<ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-62">
			<PieChart>
				<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

				<Pie
					data={chartData}
					dataKey="bookings"
					nameKey="court"
					innerRadius={60}
					strokeWidth={5}
					shape={({ index, outerRadius = 0, ...props }: PieSectorShapeProps) =>
						index === activeIndex ? (
							<Sector {...props} outerRadius={outerRadius + 10} />
						) : (
							<Sector {...props} outerRadius={outerRadius} />
						)
					}
				/>
			</PieChart>
		</ChartContainer>
	)
}
