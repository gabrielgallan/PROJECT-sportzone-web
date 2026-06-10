import Cookies from 'js-cookie'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { usePostApiSessionsGoogle } from '@/api/generated'

export function GoogleCallback() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const { mutateAsync: authenticateWithGoogle } = usePostApiSessionsGoogle()

	useEffect(() => {
		const code = searchParams.get('code')

		if (!code) {
			throw new Error()
		}

		authenticateWithGoogle({ data: { code } })
			.then(({ token }) => {
				Cookies.set('access-token', token)

				navigate('/')
			})
			.catch(() => {
				toast.error('Failed to authenticate with GitHub. Try again in a few minutes.')

				navigate('/auth/sign-in')
			})
	}, [searchParams, authenticateWithGoogle, navigate])

	return (
		<div className="flex h-screen items-center justify-center">
			<Loader2 className="text-muted-foreground size-6 animate-spin" />
		</div>
	)
}
