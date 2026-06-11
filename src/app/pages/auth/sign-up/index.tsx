import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, TriangleAlert } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { usePostApiUsers } from '@/api/generated'
import { PageTitle } from '@/components/page-title'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Field, FieldSeparator } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthProvider } from '@/hooks/use-oauth-provider'

const signUpFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string(),
})

type SignUpFormType = z.infer<typeof signUpFormSchema>

export function SignUpPage() {
	const navigate = useNavigate()

	const { link: githubRedirect } = useAuthProvider('github')
	const { link: googleRedirect } = useAuthProvider('google')

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors: formErrors },
	} = useForm<SignUpFormType>({
		resolver: zodResolver(signUpFormSchema),
	})

	const { mutateAsync: registerUser, error: apiError } = usePostApiUsers()

	async function handleSignUp({ name, email, password }: SignUpFormType) {
		await registerUser({ data: { name, email, password } })

		toast.success('Account created successfully.', {
			position: 'top-center',
		})

		navigate(`/auth/sign-in?email=${email}`)
	}

	return (
		<>
			<PageTitle title="Register" />
			<div className="p-8">
				<div className="w-87.5 flex flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>

						<form onSubmit={handleSubmit(handleSignUp)} className="space-y-6 mt-4">
							{apiError && (
								<Alert className="bg-rose-600/10 border-rose-500/20">
									<TriangleAlert />
									<AlertTitle>Sign up failed!</AlertTitle>
									<AlertDescription>
										<p>{apiError.response?.data.message ?? 'Internal server error'}</p>
									</AlertDescription>
								</Alert>
							)}

							<div className="flex flex-col gap-2 items-start">
								<Label htmlFor="name">Name</Label>
								<Input id="name" type="text" {...register('name')} />
								{formErrors.name && (
									<p className="text-sm text-rose-500 font-medium">{formErrors.name.message}</p>
								)}
							</div>

							<div className="flex flex-col gap-2 items-start">
								<Label htmlFor="email">E-mail</Label>
								<Input id="email" type="text" {...register('email')} />
								{formErrors.email && (
									<p className="text-sm text-rose-500 font-medium">{formErrors.email.message}</p>
								)}
							</div>

							<div className="flex flex-col gap-2 items-start">
								<Label htmlFor="password">Password</Label>
								<Input id="password" type="password" {...register('password')} />
								{formErrors.password && (
									<p className="text-sm text-rose-500 font-medium">{formErrors.password.message}</p>
								)}
							</div>

							<Button
								variant="default"
								className="w-full cursor-pointer py-5"
								type="submit"
								disabled={isSubmitting}
							>
								{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Register'}
							</Button>

							<Field>
								<FieldSeparator>Or register with</FieldSeparator>
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

								<Link to="/auth/sign-in" className="font-medium text-sm underline hover:opacity-90">
									Already have an account ?
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
