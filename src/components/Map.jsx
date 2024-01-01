import Wrapper from '../assets/wrappers/Map.jsx'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'

function Map () {

const { latitude, longitude } = useSelector(store => store.geolocation.search);
const position = [latitude, longitude];


  const mapAttribution = '<a href="https://www.stadiamaps.com/" target="_blank">StadiaMaps</a>'
  const mapUrl = 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'


  return (
    <Wrapper>
      <MapContainer center={position}
        zoomControl={false}
        zoom={14} scrollWheelZoom={false} className="map-container">
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
