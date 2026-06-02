import type { Court } from './court'

export interface User {
	id: string
	name: string
	email: string
	avatarUrl: string

	memberOn?: Membership[]
}

export type UserRole = 'member' | 'owner'

export interface Membership {
	id: string
	user: User
	organization: Organization
	role: UserRole
}

export interface Organization {
	id: string
	owner?: User
	name: string
	slug: string
	domain?: string
	imageUrl: string
	courts: Court[]
	members: Membership[]
}
