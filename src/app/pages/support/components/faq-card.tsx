import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, HelpCircle, MessageCircle } from 'lucide-react'

const faqItems = [
	{ title: 'How to cancel a booking' },
	{ title: 'Refund policy' },
	{ title: 'Payment methods' },
]

export function FaqCard() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-2">
					<HelpCircle className="size-4 text-muted-foreground" />
					<CardTitle className="text-base">Before you write</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="space-y-1 px-6 pb-4">
				{faqItems.map((item, i) => (
					<div key={item.title}>
						<div className="flex items-center justify-between py-2.5 cursor-pointer group">
							<div className="flex items-center gap-2">
								<MessageCircle className="size-3.5 group-hover:text-primary text-muted-foreground" />
								<span className="text-sm group-hover:text-primary transition-colors">
									{item.title}
								</span>
							</div>
							<ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
						</div>
						{i < faqItems.length - 1 && <div className="border-t" />}
					</div>
				))}
			</CardContent>
		</Card>
	)
}
