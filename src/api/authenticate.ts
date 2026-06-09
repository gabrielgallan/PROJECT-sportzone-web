import { api } from '@/lib/ky'

type AuthenticateRequest = {
	email: string
	password: string
}

type AuthenticateResponse = {
	token: string
}

export async function authenticate({ email, password }: AuthenticateRequest) {
	const result = await api
		.post('api/sessions', {
			json: {
				email,
				password,
			},
		})
		.json<AuthenticateResponse>()

	return result
}
