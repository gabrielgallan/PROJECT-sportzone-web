import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { TabsContent } from '@/components/ui/tabs'

export function PreferencesSettingsTab() {
	return (
		<TabsContent value="preferences">
			<Card>
				<CardHeader>
					<CardTitle>My preferences</CardTitle>
					<CardDescription>Manage your general account settings and preferences.</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-6">
					{/* Appearance */}
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium">Appearance</p>
						<FieldGroup>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel>Theme</FieldLabel>
									<FieldDescription>
										Choose between light, dark or system default theme.
									</FieldDescription>
								</FieldContent>
								<Select defaultValue="system">
									<SelectTrigger className="w-36">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">Light</SelectItem>
										<SelectItem value="dark">Dark</SelectItem>
										<SelectItem value="system">System</SelectItem>
									</SelectContent>
								</Select>
							</Field>
						</FieldGroup>
					</div>

					<Separator />

					{/* Language */}
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium">Language & Region</p>
						<FieldGroup>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel>Language</FieldLabel>
									<FieldDescription>
										Select the language used across the interface.
									</FieldDescription>
								</FieldContent>
								<Select defaultValue="en">
									<SelectTrigger className="w-36">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="en">English</SelectItem>
										<SelectItem value="pt-BR">Português (BR)</SelectItem>
										<SelectItem value="es">Español</SelectItem>
									</SelectContent>
								</Select>
							</Field>
						</FieldGroup>
					</div>

					<Separator />

					{/* Security */}
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium">Security</p>
						<FieldGroup>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="switch-2fa">Two-factor authentication</FieldLabel>
									<FieldDescription>
										Require a verification code on every login for extra security.
									</FieldDescription>
								</FieldContent>
								<Switch id="switch-2fa" />
							</Field>

							<Field orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor="switch-login-alerts">Login alerts</FieldLabel>
									<FieldDescription>
										Get notified by email whenever a new login to your account is detected.
									</FieldDescription>
								</FieldContent>
								<Switch id="switch-login-alerts" />
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
