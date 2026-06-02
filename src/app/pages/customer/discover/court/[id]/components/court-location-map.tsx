import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useTheme } from '@/components/theme-provider'
import type { Court } from '@/types/court'

import 'leaflet/dist/leaflet.css'

const courtLocationIcon = L.divIcon({
	className: 'custom-court-marker',
	html: `
		<div class="court-marker-wrapper">
			<div class="court-marker-pulse"></div>
			<div class="court-marker-dot"></div>
		</div>
	`,
	iconSize: [24, 24],
	iconAnchor: [12, 12],
})

interface CourtLocationMarkerProps {
	position: { lng: number; lat: number }
	name: string
	address: string
}

function CourtLocationMarker({ position, name, address }: CourtLocationMarkerProps) {
	return (
		<Marker position={position} icon={courtLocationIcon}>
			<Popup>
				<div>
					<h1 className="text-base font-semibold m-0 p-0">{name}</h1>
					<p className="text-muted-foreground">{address}</p>
				</div>
			</Popup>
		</Marker>
	)
}

interface CourtLocationMapProps {
	court: Court
}

export function CourtLocationMap({ court }: CourtLocationMapProps) {
	const { theme } = useTheme()

	const isDark = theme === 'dark'

	const position = { lng: court.longitude, lat: court.latitude }

	return (
		<MapContainer
			center={position}
			zoom={15}
			scrollWheelZoom={false}
			className="h-full w-full rounded-xl"
		>
			{isDark ? (
				<TileLayer
					url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
					attribution="&copy; OpenStreetMap &copy; CARTO"
				/>
			) : (
				<TileLayer
					url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
					attribution="&copy; OpenStreetMap &copy; CARTO"
				/>
			)}

			<CourtLocationMarker address={court.address} name={court.name} position={position} />
		</MapContainer>
	)
}
