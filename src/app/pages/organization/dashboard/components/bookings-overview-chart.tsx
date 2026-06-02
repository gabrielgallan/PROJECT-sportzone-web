import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'

interface BookingsOverviewChartData {
	label: string
	bookings: number
}

interface BookingsOverviewChartProps {
	data: BookingsOverviewChartData[]
}

const chartConfig = {
	bookings: {
		label: 'Bookings',
		color: 'var(--primary)',
	},
} satisfies ChartConfig

export function BookingsOverviewChart({ data }: BookingsOverviewChartProps) {
	return (
		<Card className="h-fit">
			<CardHeader>
				<CardTitle>Bookings over time</CardTitle>
				<CardDescription>Reservation volume for the selected period.</CardDescription>
			</CardHeader>
			<CardContent className="h-70">
				<ChartContainer config={chartConfig} className="w-full h-full">
					<LineChart data={data}>
						<CartesianGrid vertical={false} />

						<XAxis
							dataKey="label"
							tickLine={false}
							axisLine={false}
							padding={{ left: 16, right: 16 }}
						/>

						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

						<Line
							dataKey="bookings"
							type="monotone"
							stroke="var(--color-bookings)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
