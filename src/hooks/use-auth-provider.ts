import { env } from '@/env'

export function useAuthProvider(_provider: 'github') {
	const githubOAuthURL = new URL('https://github.com/login/oauth/authorize')

	githubOAuthURL.searchParams.set('client_id', env.VITE_GITHUB_OAUTH_CLIENT_ID)
	githubOAuthURL.searchParams.set('redirect_uri', env.VITE_GITHUB_OAUTH_CLIENT_REDIRECT_URI)
	githubOAuthURL.searchParams.set('scope', 'user:email')

	return { link: githubOAuthURL }
}
