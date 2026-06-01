import { PageTitle } from '@/components/page-title'
import { ProfileSettingsSidebar } from './components/profile-settings-sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SettingsTabs } from './components/settings-tabs'

export function SettingsPage() {
	return (
		<>
			<PageTitle title="Settings" />
			<main className="mx-auto grid max-w-280 w-full gap-6 py-6 px-4">
				<div className="grid gap-6 md:grid-cols-[18rem_1fr]">
					<aside className="space-y-6">
						<ProfileSettingsSidebar />

						<Card className="bg-muted-foreground/5">
							<CardHeader className="flex items-center gap-2">
								<HelpCircle className="size-4" />
								<CardTitle className="text-sm">Need help?</CardTitle>
							</CardHeader>

							<CardContent>
								<Link to={`/support`}>
									<Button className="p-0" variant="link">
										Contact our support team
									</Button>
								</Link>
							</CardContent>
						</Card>
					</aside>

					<SettingsTabs />
				</div>
			</main>
		</>
	)
}
