import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Ban, ChevronRight } from 'lucide-react'

export function CancelBookingModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="group hover:text-rose-500 cursor-pointer transition-colors">
					<CardContent className="flex items-center justify-between">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<Ban className="size-4" />
								<CardTitle className="text-sm">Cancel this booking</CardTitle>
							</div>
							<CardDescription className="text-xs">
								Cancel and get a refund according to the cancellation policy.
							</CardDescription>
						</div>
						<ChevronRight className="size-4 text-muted-foreground group-hover:text-rose-500" />
					</CardContent>
				</Card>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Cancel booking</DialogTitle>
					<DialogDescription>
						Are you sure you want to cancel this booking? This action cannot be undone and a
						cancellation fee may apply depending on the policy.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="cancel-reason">Reason for cancellation</Label>
						<Select>
							<SelectTrigger id="cancel-reason" className="w-full">
								<SelectValue placeholder="Select a reason" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="schedule-conflict">Schedule conflict</SelectItem>
									<SelectItem value="found-better-option">Found a better option</SelectItem>
									<SelectItem value="personal-emergency">Personal emergency</SelectItem>
									<SelectItem value="price-issue">Price issue</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="flex justify-end gap-2">
						<DialogClose asChild>
							<Button variant="outline">Keep booking</Button>
						</DialogClose>
						<Button variant="default">Confirm cancelation</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
