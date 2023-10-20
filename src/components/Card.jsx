import Wrapper from '../assets/wrappers/Card.jsx'

const Card = () => {

  return (
    <Wrapper>
      <div className="card-center">
        <div className="card">
          <h5 className="card-title">IP Address</h5>
          <p className="card-data">192.168.1.223</p>
        </div>
        <div className="card">
          <h5 className="card-title">Location</h5>
          <p className="card-data">Taipei, Taiwan</p>
        </div>
        <div className="card">
          <h5 className="card-title">Timezone</h5>
          <p className="card-data">UTC +08:00</p>
        </div>
        <div className="card">
          <h5 className="card-title">ISP</h5>
          <p className="card-data">Chungwha Telecom</p>
        </div>

      </div>

    </Wrapper>
  )
}

export default Card
