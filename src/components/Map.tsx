import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import Wrapper from '../assets/wrappers/Map.tsx'

function Map() {

    const latitude = '25.284266'
    const longitude = '121.5319'

    const position = [latitude, longitude]

    // re render map
    const key = `${latitude}-${longitude}`
    const mapAttribution = '<a href="https://www.stadiamaps.com/" target="_blank">StadiaMaps</a>'
    const mapUrl = 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'

    return (
        <Wrapper>
            <MapContainer center={position} key={key} zoomControl={true} zoom={14} scrollWheelZoom={false} className="map-container">
                <TileLayer
                    attribution={mapAttribution}
                    url={mapUrl}
                    ext={'png'}
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Wrapper>
    )
}

export default Map
