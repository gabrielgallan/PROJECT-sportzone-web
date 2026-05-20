import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const signUpFormSchema = z.object({
	name: z.string().optional(),
	email: z.email(),
	password: z.string(),
	confirmPassword: z.string(),
})

type SignUpFormType = z.infer<typeof signUpFormSchema>

export function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignUpFormType>({
		resolver: zodResolver(signUpFormSchema),
	})

	async function handleSignUp(data: SignUpFormType) {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(data)

				toast.error('Failed to sign up. Try again in a few minutes', {
					position: 'top-center',
				})

				resolve(null)
			}, 2000)
		})
	}

	return (
		<>
			<PageTitle title="Register" />
			<div className="p-8">
				<div className="w-87.5 flex flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>

						<form onSubmit={handleSubmit(handleSignUp)} className="space-y-6 mt-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" type="text" {...register('name')} />
							</div>

							<div className="space-y-2">
								<Label htmlFor="email">E-mail</Label>
								<Input id="email" type="email" {...register('email')} />
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" type="password" {...register('password')} />
							</div>

							<div className="space-y-2">
								<Label htmlFor="confirmPassword">Confirm password</Label>
								<Input id="confirmPassword" type="password" {...register('confirmPassword')} />
							</div>

							<Button
								variant="default"
								className="w-full cursor-pointer py-5"
								type="submit"
								disabled={isSubmitting}
							>
								{isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Register'}
							</Button>

							<Separator />

							<div className="space-y-4">
								<Button
									variant="secondary"
									className="w-full cursor-pointer py-5 flex gap-2"
									type="button"
									disabled={isSubmitting}
								>
									<FaGithub className="size-4" />
									<span>Sign up with GitHub</span>
								</Button>

								<Button
									variant="secondary"
									className="w-full cursor-pointer py-5 flex gap-2"
									type="button"
									disabled={isSubmitting}
								>
									<FaGoogle className="size-4" />
									<span>Sign up with Google</span>
								</Button>

								<Link to="/sign-in" className="font-medium text-sm underline hover:opacity-90">
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
