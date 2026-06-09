import { api } from '@/lib/ky'

type RegisterRequest = {
	name: string
	email: string
	password: string
}

type RegisterResponse = null

export async function register({ name, email, password }: RegisterRequest) {
	const result = await api
		.post('api/users', {
			json: {
				name,
				email,
				password,
			},
		})
		.json<RegisterResponse>()

	return result
}
