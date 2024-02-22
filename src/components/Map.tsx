import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import Wrapper from '../assets/wrappers/Map.tsx'

function Map() {

    const position = [25.284266, 121.5319]
    const key = `${position[0]}-${position[1]}`
    const mapAttribution = '<a href="https://www.stadiamaps.com/" target="_blank">StadiaMaps</a>'
    const mapUrl = 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'

    return (
        <Wrapper>
            <MapContainer
                key={key}
                center={[position[0], position[1]]}
                zoom={14}
                zoomControl={true}
                scrollWheelZoom={false}
                className="map-container">
                <TileLayer
                    attribution={mapAttribution}
                    url={mapUrl}
                />
                <Marker position={[position[0], position[1]]}>
                    <Popup>
                        This is your current <br/> Location.
                    </Popup>
                </Marker>
            </MapContainer>
        </Wrapper>
    )
}

export default Map
