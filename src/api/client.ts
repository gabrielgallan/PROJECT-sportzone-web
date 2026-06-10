import axios from 'axios'
import Cookies from 'js-cookie'
import { env } from '@/env'

const api = axios.create({
	baseURL: env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
	const token = Cookies.get('access-token')

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

export default api
