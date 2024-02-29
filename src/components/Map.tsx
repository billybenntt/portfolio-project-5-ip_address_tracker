import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import Wrapper from '../assets/wrappers/Map.tsx'
import {useAppSelector} from '../store/hooks.ts';

function Map() {

    const {latitude, longitude} = useAppSelector(store => store.geolocation.search)
    const position = [latitude, longitude]
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
                        This is your approximate Location: <br/>
                        {`Latitude:  ${position[0]} Longitude:  ${position[1]}`}
                    </Popup>

                </Marker>
            </MapContainer>
        </Wrapper>
    )
}

export default Map
