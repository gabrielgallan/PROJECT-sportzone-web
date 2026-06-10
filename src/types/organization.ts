import type { Court } from './court'

interface User {
	id?: string
	name: string | null
	email: string
	avatarUrl: string

	memberOn?: Membership[]
}

type UserRole = 'member' | 'owner' | 'billing'

interface Membership {
	id: string
	user: User
	organization: Organization
	role: UserRole
	createdAt: Date
}

interface Organization {
	id: string
	owner?: User
	name: string
	slug: string
	domain?: string
	imageUrl: string
	courts: Court[]
	members: Membership[]
}

export type { Membership, Organization, User, UserRole }
