import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { usePatchApiPasswordReset } from '@/api/generated'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const resetPasswordFormSchema = z.object({
	password: z.string(),
})

type ResetPasswordFormType = z.infer<typeof resetPasswordFormSchema>

export function ResetPasswordPage() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const recoverCode = searchParams.get('code')

	if (!recoverCode) {
		toast.error('Failed to reset your password. Try again in a few minutes')

		navigate('/auth/forgot-password')
	}

	const { mutateAsync: resetPassword } = usePatchApiPasswordReset()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<ResetPasswordFormType>()

	async function handleRequestPasswordRecover({ password }: ResetPasswordFormType) {
		await resetPassword({ data: { recoverCode, password } })

		navigate('/auth/sign-in')
	}

	return (
		<>
			<PageTitle title="Reset your password" />
			<div className="p-8">
				<div className="w-87.5 flex flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<form onSubmit={handleSubmit(handleRequestPasswordRecover)} className="space-y-6 mt-4">
							<div className="space-y-2">
								<Label htmlFor="password">New Password</Label>
								<Input id="password" type="password" {...register('password')} />
							</div>

							<Button
								variant="default"
								className="w-full cursor-pointer py-5"
								type="submit"
								disabled={isSubmitting}
							>
								{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Confirm'}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
