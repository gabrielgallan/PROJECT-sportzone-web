import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { register as registerUser } from '@/api/register'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Field, FieldSeparator } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string(),
})

type SignUpFormType = z.infer<typeof signUpFormSchema>

export function SignUpPage() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignUpFormType>({
		resolver: zodResolver(signUpFormSchema),
	})

	const { mutateAsync: registerUserFn } = useMutation({
		mutationFn: registerUser,
	})

	async function handleSignUp(data: SignUpFormType) {
		try {
			await registerUserFn({ name: data.name, email: data.email, password: data.password })

			toast.success('Register successfully', {
				position: 'top-right',
			})

			navigate(`/auth/sign-in?email=${data.email}`)
		} catch {
			toast.error('Failed to register')
		}
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
										variant="secondary"
										className="cursor-pointer py-5"
										type="button"
										disabled={isSubmitting}
									>
										<FaGithub className="size-4" />
									</Button>

									<Button
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
