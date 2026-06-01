import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Bell, CreditCard, SlidersHorizontal } from 'lucide-react'
import { PreferencesSettingsTab } from './preferences-settings-tab'
import { NotificationsSettingsTab } from './notifications-settings-tab'
import { BillingSettingsTab } from './billing-settings-tab'

export function SettingsTabs() {
	return (
		<div>
			<Tabs defaultValue="preferences" className="w-full flex flex-col">
				<TabsList variant="default">
					<TabsTrigger value="preferences">
						<SlidersHorizontal />
						Preferences
					</TabsTrigger>

					<TabsTrigger value="notification">
						<Bell /> Notifications
					</TabsTrigger>

					<TabsTrigger value="billing">
						<CreditCard /> Billing
					</TabsTrigger>
				</TabsList>

				<PreferencesSettingsTab />

				<NotificationsSettingsTab />

				<BillingSettingsTab />
			</Tabs>
		</div>
	)
}
