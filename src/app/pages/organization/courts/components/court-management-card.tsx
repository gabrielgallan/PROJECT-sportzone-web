import { CalendarDays, Clock3, MapPin, PencilLine, Settings2, Ticket, Wrench } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CourtManagementCardProps {
	court: {
		id: string
		name: string
		sport: string
		address: string
		imageUrl: string
		status: 'active' | 'draft' | 'paused' | 'maintenance'
		pricePerHour: number
		bookingsThisWeek: number
		weeklyOccupancy: number
		nextBooking: string
		alert: string
	}
}

const statusLabelMap = {
	active: 'Active',
	draft: 'Draft',
	paused: 'Paused',
	maintenance: 'Maintenance',
} satisfies Record<CourtManagementCardProps['court']['status'], string>

const statusClassMap = {
	active: 'bg-primary/10 text-primary',
	draft: 'bg-muted text-muted-foreground',
	paused: 'bg-amber-500/10 text-amber-600',
	maintenance: 'bg-rose-500/10 text-rose-500',
} satisfies Record<CourtManagementCardProps['court']['status'], string>

function formatCurrency(value: number) {
	return (value / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
	})
}

export function CourtManagementCard({ court }: CourtManagementCardProps) {
	return (
		<Card className="overflow-hidden p-0 gap-0">
			<div className="aspect-video overflow-hidden">
				<img src={court.imageUrl} alt={court.name} className="h-full w-full object-cover" />
			</div>

			<CardContent className="space-y-5 p-5">
				<div className="space-y-3">
					<div className="flex items-start justify-between gap-3">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-tight">{court.name}</h3>
							<div className="flex flex-wrap items-center gap-2">
								<Badge variant="secondary">{court.sport}</Badge>
								<Badge className={cn(statusClassMap[court.status])}>{statusLabelMap[court.status]}</Badge>
							</div>
						</div>

						<div className="text-right">
							<p className="text-xs text-muted-foreground">Per hour</p>
							<p className="text-base font-semibold">{formatCurrency(court.pricePerHour)}</p>
						</div>
					</div>

					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<MapPin className="size-4" />
						<p>{court.address}</p>
					</div>
				</div>

				<div className="grid gap-3 sm:grid-cols-3">
					<div className="rounded-xl bg-muted/20 p-3">
						<div className="flex items-center gap-2 text-muted-foreground">
							<Ticket className="size-4" />
							<span className="text-xs">Bookings this week</span>
						</div>
						<p className="mt-2 text-lg font-semibold">{court.bookingsThisWeek}</p>
					</div>

					<div className="rounded-xl bg-muted/20 p-3">
						<div className="flex items-center gap-2 text-muted-foreground">
							<CalendarDays className="size-4" />
							<span className="text-xs">Weekly occupancy</span>
						</div>
						<p className="mt-2 text-lg font-semibold">{court.weeklyOccupancy}%</p>
					</div>

					<div className="rounded-xl bg-muted/20 p-3">
						<div className="flex items-center gap-2 text-muted-foreground">
							<Clock3 className="size-4" />
							<span className="text-xs">Next booking</span>
						</div>
						<p className="mt-2 text-sm font-medium">{court.nextBooking}</p>
					</div>
				</div>

				<div className="flex items-start gap-2 rounded-xl border border-dashed bg-muted/10 p-3 text-sm text-muted-foreground">
					<Wrench className="mt-0.5 size-4 shrink-0" />
					<p>{court.alert}</p>
				</div>
			</CardContent>

			<CardFooter className="grid gap-2 border-t bg-muted/10 p-5 sm:grid-cols-3">
				<Button variant="outline" className="w-full justify-center">
					<PencilLine className="size-4" />
					Edit
				</Button>
				<Button variant="secondary" className="w-full justify-center">
					<Settings2 className="size-4" />
					Manage schedule
				</Button>
				<Button className="w-full justify-center">
					<Ticket className="size-4" />
					View bookings
				</Button>
			</CardFooter>
		</Card>
	)
}
