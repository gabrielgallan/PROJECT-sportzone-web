import { Loader2, TriangleAlert } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { usePostApiPasswordRecover } from '@/api/generated'
import { PageTitle } from '@/components/page-title'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const forgotPasswordFormSchema = z.object({
	email: z.email(),
})

type ForgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>

export function ForgotPasswordPage() {
	const { mutateAsync: requestPasswordRecover, error: apiError } = usePostApiPasswordRecover()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<ForgotPasswordFormType>()

	async function handleRequestPasswordRecover({ email }: ForgotPasswordFormType) {
		try {
			await requestPasswordRecover({ data: { email } })

			toast.success('Recovery email sent', {
				position: 'top-center',
			})
		} catch {
			toast.error('Unable to send recovery email. Try again in a few minutes.')
		}
	}

	return (
		<>
			<PageTitle title="Forgot your password" />
			<div className="p-8">
				<div className="w-87.5 flex flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Send an email</h1>

						<form onSubmit={handleSubmit(handleRequestPasswordRecover)} className="space-y-6 mt-4">
							{apiError && (
								<Alert className="bg-rose-600/10 border-rose-500/20">
									<TriangleAlert />
									<AlertTitle>Request failed!</AlertTitle>
									<AlertDescription>
										<p>{apiError.response?.data.message ?? 'Internal server error'}</p>
									</AlertDescription>
								</Alert>
							)}

							<div className="space-y-2">
								<Label htmlFor="email">E-mail</Label>
								<Input id="email" type="email" {...register('email')} />
							</div>

							<Button
								variant="default"
								className="w-full cursor-pointer py-5"
								type="submit"
								disabled={isSubmitting}
							>
								{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send'}
							</Button>

							<Link to="/auth/sign-in" className="font-medium text-sm underline hover:opacity-90">
								Sign in instead
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
