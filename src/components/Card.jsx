import Wrapper from '../assets/wrappers/Card.jsx'
import { useSelector } from 'react-redux'

const Card = () => {

  const { location, timezone, isp, ip } = useSelector(store => store.geolocation.search)

  return (
    <Wrapper>
      <div className="card-center">
        <div className="card">
          <h5 className="card-title">IP Address</h5>
          <p className="card-data">{ip}</p>
        </div>
        <div className="card">
          <h5 className="card-title">Location</h5>
          <p className="card-data">{location}</p>
        </div>
        <div className="card">
          <h5 className="card-title">Timezone</h5>
          <p className="card-data">{timezone}</p>
        </div>
        <div className="card">
          <h5 className="card-title">ISP</h5>
          <p className="card-data">{isp}</p>
        </div>

      </div>

    </Wrapper>
  )
}

export default Card
