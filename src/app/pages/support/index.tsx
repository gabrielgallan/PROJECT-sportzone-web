import { Headphones } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageTitle } from '@/components/page-title'
import { FaqCard } from './components/faq-card'
import { SupportRequestForm } from './components/support-request-form'

export function SupportPage() {
	return (
		<>
			<PageTitle title="Support" />
			<main className="mx-auto grid max-w-250 w-full gap-6 py-6 px-4">
				{/* Header */}
				<header>
					<div className="space-y-1">
						<h1 className="text-xl md:text-2xl font-semibold tracking-tight">How can we help?</h1>
						<span className="text-sm md:text-base text-muted-foreground">
							Send us a message and our team will get back to you shortly
						</span>
					</div>
				</header>

				{/* Main grid */}
				<div className="grid gap-6 lg:grid-cols-[1fr_320px]">
					<div className="space-y-4">
						<SupportRequestForm />
					</div>

					{/* Sidebar */}
					<aside className="flex flex-col gap-4">
						<FaqCard />

						{/* Urgent help */}
						<Card className="bg-muted-foreground/5">
							<CardHeader className="flex flex-row items-center gap-2 pb-2">
								<Headphones className="size-4" />
								<CardTitle className="text-sm">Need urgent help?</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-3">
								<CardDescription className="text-xs">
									For time-sensitive issues like same-day bookings, reach us directly via live chat
									during business hours.
								</CardDescription>
								<Button className="p-0 w-fit" variant="link">
									Start live chat
								</Button>
							</CardContent>
						</Card>
					</aside>
				</div>
			</main>
		</>
	)
}
