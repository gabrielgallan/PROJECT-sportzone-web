import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useTheme } from 'next-themes'

const position: [number, number] = [51.505, -0.09]

export function CourtsMap() {
	const { resolvedTheme } = useTheme()

	const isDark = resolvedTheme === 'dark'

	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			className="h-full w-full rounded-xl border-4 border-primary outline-2 outline-background"
		>
			<TileLayer
				url={
					isDark
						? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
						: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				}
			/>

			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	)
}
