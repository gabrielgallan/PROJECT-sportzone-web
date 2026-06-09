import { api } from '@/lib/ky'

type AuthenticateWithGithubWithGithub = {
	code: string
}

type AuthenticateWithGithubResponse = {
	token: string
}

export async function authenticateWithGithub({ code }: AuthenticateWithGithubWithGithub) {
	const result = await api
		.post('api/sessions/github', {
			json: {
				code,
			},
		})
		.json<AuthenticateWithGithubResponse>()

	return result
}
