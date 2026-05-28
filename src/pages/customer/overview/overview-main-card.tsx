import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { BadgePlus } from 'lucide-react'

export function OverviewMainCard() {
	const colorGradient = 'from-primary via-primary/90 to-primary/70'

	return (
		<Card
			className={cn(
				'text-background dark:text-foreground shadow-xl',
				'bg-linear-to-br',
				colorGradient
			)}
		>
			<CardContent className="grid gap-4 md:flex md:justify-between">
				<div className="flex flex-col justify-between">
					<div className="flex items-center gap-2 rounded-2xl py-2 px-4 bg-primary-foreground/10 w-fit">
						<span className="block rounded-full h-2 w-2 bg-foreground/80" />
						<span className="text-xs font-medium">Bookings</span>
					</div>

					<div>
						<CardTitle className="text-xl font-semibold">Ready for your next game?</CardTitle>
						<CardDescription className="text-white/40">
							Manage your bookings, discover new courts and keep track of your upcoming matches in
							one place.
						</CardDescription>
					</div>
				</div>

				<div className="grid gap-2">
					<div className="flex items-center gap-6 bg-white/10 px-6 py-4 rounded-xl border border-white/10">
						<div className="flex flex-col items-center">
							<span className="font-bold">0</span>
							<span className="font-extralight text-xs">TOTAL</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold">1</span>
							<span className="font-extralight text-xs">PENDING</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold">2</span>
							<span className="font-extralight text-xs">CONFIRMED</span>
						</div>
					</div>

					<Button type="button" variant="secondary" className="py-6">
						<BadgePlus className="size-4" />
						<span>New booking</span>
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
