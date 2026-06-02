import { Input } from '@/components/ui/input'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

const supportFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	subject: z.string(),
	issue: z.string().min(1),
})

// type SupportSubject = 'booking' | 'payment' | 'account' | 'court' | 'other'

type SupportFormType = z.infer<typeof supportFormSchema>

export function SupportRequestForm() {
	const [searchParams, setSearchParams] = useSearchParams()

	const subject = searchParams.get('subject')
	const issue = searchParams.get('issue')

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting, isSubmitted },
	} = useForm<SupportFormType>({
		resolver: zodResolver(supportFormSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: subject ?? '',
			issue: issue ?? '',
		},
	})

	function handleSendIssue(_data: SupportFormType) {
		return new Promise((resolve) => {
			setTimeout(() => {
				try {
					setSearchParams((url) => {
						url.delete('subject')

						url.delete('issue')

						return url
					})

					reset({
						name: '',
						email: '',
						subject: '',
						issue: '',
					})

					toast.success('Support request sent successfully', {
						position: 'top-center',
					})
				} catch {
					toast.error('Failed to send your issue, please try again in a few minutes', {
						position: 'top-center',
					})
				}

				resolve(null)
			}, 2000)
		})
	}

	return (
		<Card>
			<CardContent>
				{isSubmitted ? (
					<div className="flex h-48 items-center justify-center">
						<div className="flex flex-col items-center text-center gap-2">
							<CheckCircle2 className="mx-auto size-8 text-primary" />

							<p className="text-sm text-muted-foreground">
								We received your message and will get back to you as soon as possible.
							</p>
						</div>
					</div>
				) : (
					<form onSubmit={handleSubmit(handleSendIssue)} className="flex flex-col gap-4">
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="name">Your name</Label>
								<Input {...register('name')} id="name" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Your e-mail</Label>
								<Input {...register('email')} id="email" type="email" />
							</div>
						</div>

						<Controller
							name="subject"
							control={control}
							render={({ field: { name, onChange, value, disabled } }) => {
								return (
									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>

										<Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
											<SelectTrigger id="subject" className="w-full">
												<SelectValue placeholder="Select your subject..." />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Topics</SelectLabel>
													<SelectItem value="booking">Booking issue</SelectItem>
													<SelectItem value="payment">Payment & refund</SelectItem>
													<SelectItem value="account">Account access</SelectItem>
													<SelectItem value="court">Court problem</SelectItem>
													<SelectItem value="other">Other</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								)
							}}
						/>

						<div className="space-y-2">
							<Label htmlFor="issue">Describe your issue</Label>
							<Textarea
								id="issue"
								{...register('issue')}
								placeholder="Describe your issue in as much detail as possible..."
								className="min-h-36 resize-y"
							/>
						</div>

						<Button disabled={isSubmitting} type="submit" className="w-15 ml-auto gap-2">
							{isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <span>Send</span>}
						</Button>
					</form>
				)}
			</CardContent>
		</Card>
	)
}
