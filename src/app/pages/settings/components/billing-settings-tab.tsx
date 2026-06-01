import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { TabsContent } from '@/components/ui/tabs'

import { CreditCard } from 'lucide-react'

export function BillingSettingsTab() {
	return (
		<TabsContent value="billing">
			<Card>
				<CardHeader>
					<CardTitle>Billing</CardTitle>
					<CardDescription>Manage your subscription and payment details.</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-6">
					{/* Current Plan */}
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium">Current plan</p>
						<div className="flex items-center justify-between rounded-lg border px-4 py-3">
							<div className="flex flex-col gap-0.5">
								<div className="flex items-center gap-2">
									<span className="text-sm font-medium">Pro</span>
									<Badge>Active</Badge>
								</div>
								<span className="text-xs text-muted-foreground">
									$19/month · renews on July 1, 2026
								</span>
							</div>
							<Button variant="outline" size="sm">
								Manage
							</Button>
						</div>
					</div>

					{/* Payment Method */}
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium">Payment method</p>
						<div className="flex items-center justify-between rounded-lg border px-4 py-3">
							<div className="flex items-center gap-3">
								<CreditCard className="size-4 text-muted-foreground" />
								<div className="flex flex-col gap-0.5">
									<span className="text-sm font-medium">Visa ending in 4242</span>
									<span className="text-xs text-muted-foreground">Expires 08/2027</span>
								</div>
							</div>
							<Button variant="outline" size="sm">
								Update
							</Button>
						</div>
					</div>

					<Separator />

					{/* Billing notifications */}
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium">Billing notifications</p>
						<FieldGroup>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="switch-invoice">Invoice emails</FieldLabel>
									<FieldDescription>
										Receive an email with your invoice every time a payment is processed.
									</FieldDescription>
								</FieldContent>
								<Switch id="switch-invoice" />
							</Field>

							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="switch-payment-failed">Payment failure alerts</FieldLabel>
									<FieldDescription>
										Get notified immediately if a payment attempt fails.
									</FieldDescription>
								</FieldContent>
								<Switch id="switch-payment-failed" />
							</Field>
						</FieldGroup>
					</div>

					<Button disabled className="w-18 ml-auto">
						Save
					</Button>
				</CardContent>
			</Card>
		</TabsContent>
	)
}
