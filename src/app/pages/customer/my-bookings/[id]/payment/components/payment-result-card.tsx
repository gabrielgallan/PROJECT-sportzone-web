import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type PaymentResultVariant = 'success' | 'failed'

interface PaymentResultCardProps {
	variant: PaymentResultVariant
	title: string
	description: string
	bookingDetailsHref: string
	bookingsHref: string
	icon: LucideIcon
}

const variantStyles: Record<
	PaymentResultVariant,
	{
		cardClassName: string
		iconWrapperClassName: string
		eyebrow: string
		primaryButtonVariant: 'default' | 'destructive'
	}
> = {
	success: {
		cardClassName: 'border-emerald-500/15 bg-emerald-500/5',
		iconWrapperClassName: 'bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/15',
		eyebrow: 'Payment confirmed',
		primaryButtonVariant: 'default',
	},
	failed: {
		cardClassName: 'border-rose-500/15 bg-rose-500/5',
		iconWrapperClassName: 'bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/15',
		eyebrow: 'Payment failed',
		primaryButtonVariant: 'destructive',
	},
}

export function PaymentResultCard({
	variant,
	title,
	description,
	bookingDetailsHref,
	bookingsHref,
	icon: Icon,
}: PaymentResultCardProps) {
	const styles = variantStyles[variant]

	return (
		<Card className={cn('mx-auto w-full max-w-2xl shadow-sm', styles.cardClassName)}>
			<CardHeader className="items-center px-6 pt-8 text-center">
				<div className={cn('mb-2 rounded-2xl p-4', styles.iconWrapperClassName)}>
					<Icon className="size-8" />
				</div>

				<p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
					{styles.eyebrow}
				</p>
				<CardTitle className="text-3xl font-semibold tracking-tight">{title}</CardTitle>
				<CardDescription className="max-w-md text-pretty leading-relaxed">{description}</CardDescription>
			</CardHeader>

			<CardContent className="px-6 pb-2 text-center">
				<div className="rounded-xl border bg-background/80 px-4 py-3 text-sm text-muted-foreground">
					You can return to your booking details to review the current reservation status at any time.
				</div>
			</CardContent>

			<CardFooter className="flex-col gap-3 px-6 py-6 sm:flex-row sm:justify-center">
				<Button asChild className="w-full sm:w-auto" variant={styles.primaryButtonVariant}>
					<Link to={bookingDetailsHref}>View booking details</Link>
				</Button>

				<Button asChild className="w-full sm:w-auto" variant="outline">
					<Link to={bookingsHref}>Back to my bookings</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
