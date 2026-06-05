import { CircleAlert, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CheckoutPolicyCard() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-3">
					<div className="rounded-lg p-2 bg-primary/15 text-primary">
						<ShieldCheck className="size-4" />
					</div>
					<div>
						<CardTitle>Cancellation policy</CardTitle>
						<CardDescription>Designed to keep checkout clear and reassuring.</CardDescription>
					</div>
				</div>
			</CardHeader>

			<CardContent className="space-y-4">
				<p className="leading-relaxed text-muted-foreground">
					Free cancellation is available up to 24 hours before the booking start time. After that
					window, fees may apply according to the venue policy.
				</p>

				<div className="flex items-center gap-2 text-muted-foreground/65 text-xs">
					<CircleAlert className="size-4" />
					<span>
						This message is informational only in this prototype and does not trigger any action.
					</span>
				</div>
			</CardContent>
		</Card>
	)
}
