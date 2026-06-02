import type { CourtAmenity } from '@/types/court'

import { Car, Wifi, ShowerHead, Beer, Lightbulb, LockKeyhole, type LucideIcon } from 'lucide-react'

interface CourtAmenityMeta {
	label: string
	icon: LucideIcon
}

const courtAmenitiesMap: Record<CourtAmenity, CourtAmenityMeta> = {
	parking: {
		label: 'Parking',
		icon: Car,
	},

	wifi: {
		label: 'Wi-Fi',
		icon: Wifi,
	},

	locker_room: {
		label: 'Locker room',
		icon: LockKeyhole,
	},

	bar: {
		label: 'Bar',
		icon: Beer,
	},

	lighting: {
		label: 'Lighting',
		icon: Lightbulb,
	},

	showers: {
		label: 'Showers',
		icon: ShowerHead,
	},
}

interface CourtAmenityBadgeProps {
	amenity: CourtAmenity
}

export function CourtAmenityBadge({ amenity }: CourtAmenityBadgeProps) {
	const meta = courtAmenitiesMap[amenity]

	const Icon = meta.icon

	return (
		<div className="group flex items-center gap-4 bg-muted/15 transition-all duration-75">
			<span className="block h-full w-1 bg-primary/80 group-hover:bg-primary" />

			<div className="flex items-center gap-2 my-4">
				<Icon className="size-5 text-primary/80 group-hover:text-primary" />

				<span className="text-sm text-muted-foreground">{meta.label}</span>
			</div>
		</div>
	)
}
