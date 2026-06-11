import { useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { RefreshCcw, X } from 'lucide-react'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import {
	deleteApiOrganizationsOrganizationslugMembersMemberidMutationKey,
	type GetApiOrganizationsOrganizationslugMembers200,
	postApiOrganizationsOrganizationslugMembersMemberidTransferOwnershipMutationKey,
	useDeleteApiOrganizationsOrganizationslugMembersMemberid,
	useGetApiOrganizationsOrganizationslugMembers,
	usePostApiOrganizationsOrganizationslugMembersMemberidTransferOwnership,
} from '@/api/generated'
import { Pagination } from '@/components/pagination'
import { getInitialsFromEmail, getInitialsFromName } from '@/components/profile-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

type Member = GetApiOrganizationsOrganizationslugMembers200['data'][0]

interface MembersTableRowProps {
	member: Member
	organizationSlug: string
}

function MembersTableRow({ member, organizationSlug }: MembersTableRowProps) {
	const queryClient = useQueryClient()

	const initials = member.user.name
		? getInitialsFromName(member.user.name)
		: getInitialsFromEmail(member.user.email)

	const { mutateAsync: removeMember } = useDeleteApiOrganizationsOrganizationslugMembersMemberid()

	const { mutateAsync: transferOwnership } =
		usePostApiOrganizationsOrganizationslugMembersMemberidTransferOwnership()

	async function handleRemoveMember() {
		try {
			await removeMember({ organizationSlug, memberId: member.user.id })

			await queryClient.invalidateQueries({
				queryKey: deleteApiOrganizationsOrganizationslugMembersMemberidMutationKey(),
			})

			toast(`Member ${member.user.email} removed.`)
		} catch {
			toast.error('Failed to remove member. Try again in a few minutes')
		}
	}

	async function handleTransferownership() {
		try {
			await transferOwnership({ organizationSlug, memberId: member.user.id })

			await queryClient.invalidateQueries({
				queryKey: postApiOrganizationsOrganizationslugMembersMemberidTransferOwnershipMutationKey(),
			})

			toast(`This organization owner now is ${member.user.name ?? member.user.email}`)
		} catch {
			toast.error('Failed to transfer ownership. Try again in a few minutes')
		}
	}

	return (
		<TableRow>
			<TableCell align="center">
				<Avatar>
					<AvatarImage src={member.user.avatarUrl ?? undefined} />
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>
			</TableCell>

			<TableCell>
				<span className="font-medium">{member.user.name}</span>
			</TableCell>

			<TableCell>
				<span className="text-muted-foreground">{member.user.email}</span>
			</TableCell>

			<TableCell>
				<Select defaultValue={member.membership.role}>
					<SelectTrigger className="h-9">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Role</SelectLabel>
							<SelectItem value="MEMBER">
								<span>Member</span>
							</SelectItem>
							<SelectItem value="BILLING">Billing</SelectItem>
							<SelectItem value="OWNER">Owner</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</TableCell>

			<TableCell>{format(member.membership.createdAt, 'dd MMM yyyy')}</TableCell>

			<TableCell>
				<Button variant="outline" className="gap-2" type="button" onClick={handleTransferownership}>
					<RefreshCcw className="size-4" />
					Transfer ownership
				</Button>
			</TableCell>

			<TableCell>
				<Button variant="ghost" className="gap-2" type="button" onClick={handleRemoveMember}>
					<X className="size-4" />
					Remove
				</Button>
			</TableCell>
		</TableRow>
	)
}

export function MembersTable() {
	const [searchParams, setSearchParams] = useSearchParams()
	const { slug: organizationSlug } = useParams()

	if (!organizationSlug) {
		throw new Error('Organization slug is missing')
	}

	const pageIndex = searchParams.get('page') ?? '1'

	const { data: membersList } = useGetApiOrganizationsOrganizationslugMembers(organizationSlug, {
		page: pageIndex,
		limit: '10',
	})

	function handlePaginate(page: number) {
		setSearchParams((url) => {
			url.set('page', page.toString())

			return url
		})
	}

	return (
		<>
			<div className="overflow-hidden rounded-sm border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-15" />
							<TableHead className="w-62">Name</TableHead>
							<TableHead className="w-78">E-mail</TableHead>
							<TableHead className="w-54">Role</TableHead>
							<TableHead className="w-68">Member since</TableHead>
							<TableHead className="w-46" />
							<TableHead className="w-24" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{membersList?.data.map((member) => (
							<MembersTableRow
								key={member.user.id}
								member={member}
								organizationSlug={organizationSlug}
							/>
						))}
					</TableBody>
				</Table>
			</div>

			{membersList?.data && (
				<Pagination
					onPageChange={handlePaginate}
					page={membersList.meta.page}
					limit={membersList.meta.limit}
					total={membersList.meta.total}
				/>
			)}
		</>
	)
}
