import { format } from 'date-fns'
import { RefreshCcw, X } from 'lucide-react'
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

function MembersTableRow() {
	return (
		<TableRow>
			<TableCell align="center">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</TableCell>

			<TableCell>
				<span className="font-medium">Gabriel Gallan</span>
			</TableCell>

			<TableCell>
				<span className="text-muted-foreground">gabriel@gmail.com</span>
			</TableCell>

			<TableCell>
				<Select defaultValue="member">
					<SelectTrigger className="h-9">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Role</SelectLabel>
							<SelectItem value="member">
								<span>Member</span>
							</SelectItem>
							<SelectItem value="billing">Billing</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</TableCell>

			<TableCell>{format(new Date(), 'dd MMM yyyy')}</TableCell>

			<TableCell>
				<Button variant="outline" className="gap-2">
					<RefreshCcw className="size-4" />
					Transfer ownership
				</Button>
			</TableCell>

			<TableCell>
				<Button variant="ghost" className="gap-2">
					<X className="size-4" />
					Remove
				</Button>
			</TableCell>
		</TableRow>
	)
}

export function MembersTable() {
	return (
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
					<MembersTableRow />
				</TableBody>
			</Table>
		</div>
	)
}
