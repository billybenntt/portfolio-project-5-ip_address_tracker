import Wrapper from '../assets/wrappers/Card.tsx'

const Card = () => {

  // const { country, city } = useSelector(store => store.geolocation.search)
  // const timezone = offset >= 0 ? `UTC + 0${offset / 3600}:00` : `UTC - 0${Math.abs(offset / 3600)}:00`

  return (
    <Wrapper>
      <div className="card-center">
        <div className="card">
          <h5 className="card-title">IP Address</h5>
          <p className="card-data">ip</p>
        </div>
        <div className="card">
          <h5 className="card-title">Location</h5>
          <p className="card-data">Location</p>
        </div>
        <div className="card">
          <h5 className="card-title">Timezone</h5>
          <p className="card-data">timezone</p>
        </div>
        <div className="card">
          <h5 className="card-title">ISP</h5>
          <p className="card-data">isp </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Card
