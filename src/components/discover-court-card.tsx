import { MapPin, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Court } from '@/types/court'

interface DiscoverCourtCardProps {
	court: Court
	hasVisited?: boolean
}

export function DiscoverCourtCard({ court, hasVisited = false }: DiscoverCourtCardProps) {
	const navigate = useNavigate()

	function handleOpenCourtPage() {
		const courtDetailsPage = `/discover/court/${court.id}`

		navigate(courtDetailsPage)
	}

	return (
		<Card className="overflow-hidden p-0 gap-0  max-h-85">
			<div className="aspect-video overflow-hidden">
				<img src={court.imageUrl} alt={court.name} className="h-full w-full object-cover" />
			</div>

			<CardContent className="flex flex-col gap-4 justify-between p-5">
				<div className="space-y-2">
					<div className="flex items-start justify-between gap-3">
						<div className="min-w-0 flex-1 space-y-2">
							<h1 className="text-lg font-semibold truncate">{court.name}</h1>

							<div className="flex flex-wrap items-center gap-1">
								{court.sportTypes.slice(0, 2).map((sport) => (
									<span
										key={sport}
										className="rounded-sm bg-secondary px-3 py-0.5 text-xs text-secondary-foreground"
									>
										{sport}
									</span>
								))}
							</div>
						</div>

						<div className="flex items-center gap-1 text-sm text-muted-foreground shrink-0">
							{' '}
							{/* ← shrink-0 para o rating não encolher */}
							<Star className="size-4 fill-current" />
							<span>{court.rating}</span>
						</div>
					</div>

					<div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground min-w-0">
						{' '}
						{/* ← min-w-0 aqui também */}
						<MapPin className="size-3 md:size-4 shrink-0" /> {/* ← shrink-0 no ícone */}
						<p className="truncate">{court.address}</p>
					</div>
				</div>

				<Button
					type="button"
					variant={hasVisited ? 'secondary' : 'default'}
					onClick={handleOpenCourtPage}
					className="w-full py-5 hover:opacity-80 cursor-pointer"
				>
					<span className="font-semibold">{hasVisited ? 'Book again' : 'Book now'}</span>
				</Button>
			</CardContent>
		</Card>
	)
}
