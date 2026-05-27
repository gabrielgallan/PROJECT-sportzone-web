import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from '@/components/ui/chart'

export const description = 'A bar chart'

const chartData = [
	{ month: 'January', bookings: 186 },
	{ month: 'February', bookings: 305 },
	{ month: 'March', bookings: 237 },
	{ month: 'April', bookings: 73 },
	{ month: 'May', bookings: 209 },
	{ month: 'June', bookings: 214 },
	// { month: 'July', bookings: 275 },
	// { month: 'August', bookings: 26 },
	// { month: 'September', bookings: 48 },
	// { month: 'October', bookings: 150 },
	// { month: 'November', bookings: 202 },
	// { month: 'December', bookings: 75 },
]

const chartConfig = {
	bookings: {
		label: 'Bookings',
		color: 'var(--chart-1)',
	},
} satisfies ChartConfig

export function MonthlyBookingsAmountChart() {
	return (
		<Card className="flex h-full flex-col">
			<CardHeader>
				<CardTitle>Bookings by month</CardTitle>
				<CardDescription>January - June 2026</CardDescription>
			</CardHeader>
			<CardContent className="min-h-0">
				<ChartContainer config={chartConfig} className="h-full w-full">
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Bar dataKey="bookings" fill="var(--color-bookings)" radius={8} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
