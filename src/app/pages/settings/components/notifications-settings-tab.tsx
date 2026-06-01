import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { TabsContent } from '@/components/ui/tabs'

export function NotificationsSettingsTab() {
	return (
		<TabsContent value="notification">
			<Card>
				<CardHeader>
					<CardTitle>My notifications</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-6">
					<FieldGroup className="flex flex-col gap-4">
						<Field orientation="horizontal">
							<Checkbox id="booking-updates" name="booking-updates" />
							<Label htmlFor="booking-updates">Booking updates</Label>
						</Field>

						<Field orientation="horizontal">
							<Checkbox id="new-invite" name="new-invite" />
							<Label htmlFor="new-invite">New organization invite received</Label>
						</Field>

						<Field orientation="horizontal">
							<Checkbox id="payment-confirmed" name="payment-confirmed" />
							<Label htmlFor="payment-confirmed">Payment updates</Label>
						</Field>
					</FieldGroup>

					<Separator />

					<FieldGroup>
						<Field orientation="horizontal">
							<FieldContent>
								<FieldLabel htmlFor="switch-mobile-push">Mobile push notifications</FieldLabel>
								<FieldDescription>
									Receive notifications directly on your mobile device, even when the app is closed.
								</FieldDescription>
							</FieldContent>
							<Switch id="switch-mobile-push" />
						</Field>

						<Field orientation="horizontal">
							<FieldContent>
								<FieldLabel htmlFor="switch-desktop-notification">Desktop Notification</FieldLabel>
								<FieldDescription>
									Get real-time alerts on your desktop while browsing or working on your computer.
								</FieldDescription>
							</FieldContent>
							<Switch id="switch-desktop-notification" />
						</Field>

						<Field orientation="horizontal">
							<FieldContent>
								<FieldLabel htmlFor="switch-email-notification">Email Notification</FieldLabel>
								<FieldDescription>
									Receive a summary of important updates and activity directly to your inbox.
								</FieldDescription>
							</FieldContent>
							<Switch id="switch-email-notification" />
						</Field>
					</FieldGroup>

					<Button disabled className="w-18 ml-auto">
						Save
					</Button>
				</CardContent>
			</Card>
		</TabsContent>
	)
}
