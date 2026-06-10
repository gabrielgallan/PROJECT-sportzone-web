import Cookies from 'js-cookie'
import { Loader2, TriangleAlert } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { usePostApiSessions } from '@/api/generated'
import { PageTitle } from '@/components/page-title'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Field, FieldSeparator } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthProvider } from '@/hooks/use-oauth-provider'

const signInFormSchema = z.object({
	email: z.email(),
	password: z.string(),
})

type SignInFormType = z.infer<typeof signInFormSchema>

export function SignInPage() {
	const [searchParams] = useSearchParams()

	const navigate = useNavigate()

	const { link: githubRedirect } = useAuthProvider('github')
	const { link: googleRedirect } = useAuthProvider('google')

	const { mutateAsync: authenticate, error: apiError } = usePostApiSessions()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignInFormType>({
		defaultValues: {
			email: searchParams.get('email') ?? '',
		},
	})

	async function handleSignIn({ email, password }: SignInFormType) {
		const { token } = await authenticate({ data: { email, password } })

		Cookies.set('access-token', token)

		toast.success('Signed in successfully.', {
			position: 'top-right',
		})

		navigate('/')
	}

	return (
		<>
			<PageTitle title="Login" />
			<div className="p-8">
				<div className="w-87.5 flex flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
						<p className="text-sm text-muted-foreground">
							Start to search for sport courts nearby you
						</p>

						<form onSubmit={handleSubmit(handleSignIn)} className="space-y-6 mt-4">
							{apiError && (
								<Alert className="bg-rose-600/10 border-rose-500/20">
									<TriangleAlert />
									<AlertTitle>Sign in failed!</AlertTitle>
									<AlertDescription>
										<p>{apiError.response?.data.message ?? 'Internal server error'}</p>
									</AlertDescription>
								</Alert>
							)}

							<div className="space-y-2">
								<Label htmlFor="email">E-mail</Label>
								<Input id="email" type="email" {...register('email')} />
							</div>
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<Label htmlFor="password">Password</Label>
									<Link to="/auth/forgot-password">
										<span className="text-xs text-muted-foreground hover:underline">
											Forgot your password?
										</span>
									</Link>
								</div>
								<Input id="password" type="password" {...register('password')} />
							</div>

							<Button
								variant="default"
								className="w-full cursor-pointer py-5"
								type="submit"
								disabled={isSubmitting}
							>
								{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign In'}
							</Button>

							<Field>
								<FieldSeparator>Or continue with</FieldSeparator>
							</Field>

							<div className="space-y-4">
								<div className="grid grid-cols-2 gap-2">
									<Button
										onClick={() => {
											window.location.href = githubRedirect.href
										}}
										variant="secondary"
										className="cursor-pointer py-5"
										type="button"
										disabled={isSubmitting}
									>
										<FaGithub className="size-4" />
									</Button>

									<Button
										onClick={() => {
											window.location.href = googleRedirect.href
										}}
										variant="secondary"
										className="cursor-pointer py-5"
										type="button"
										disabled={isSubmitting}
									>
										<FaGoogle className="size-4" />
									</Button>
								</div>

								<Link to="/auth/sign-up" className="font-medium text-sm underline hover:opacity-90">
									Don't have account ?
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
