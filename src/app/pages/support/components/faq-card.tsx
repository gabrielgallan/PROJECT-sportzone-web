import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'

export function FaqCard() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-2">
					<HelpCircle className="size-4 text-muted-foreground" />
					<CardTitle className="text-base">Before you write</CardTitle>
				</div>

				<CardDescription>
					Common questions about your account, plans, payments and cancellations.
				</CardDescription>
			</CardHeader>
			<CardContent className="px-4">
				<Accordion type="single" collapsible>
					<AccordionItem value="cancel-booking">
						<AccordionTrigger>How to cancel a booking?</AccordionTrigger>
						<AccordionContent>
							We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free
							shipping on international orders.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="policy">
						<AccordionTrigger>Refund policy</AccordionTrigger>
						<AccordionContent>
							We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free
							shipping on international orders.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="payments">
						<AccordionTrigger>Payment methods</AccordionTrigger>
						<AccordionContent>
							We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free
							shipping on international orders.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	)
}
