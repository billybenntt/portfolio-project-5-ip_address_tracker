import Loading from '../pages/Loading.jsx'
import Wrapper from '../assets/wrappers/Card.jsx'
import { useState } from 'react'

const Card = () => {

  const [isLoading, setIsLoading] = useState(true)

  return (
    <Wrapper>
      {isLoading ? <Loading/> : null}
      <div className="details">
        <p>IP ADDRESS</p>
        <h2>{'Ip Address'}</h2>
      </div>
      <div className="details">
        <p>LOCATION</p>
        <h2>{'Location'}</h2>
        <p> {'City'}</p>
      </div>
      <div className="details">
        <p>TIMEZONE</p>
        <h2>{'Time'}</h2>
      </div>
      <div className="details">
        <p>ISP</p>
        <h2>{'ISP'}</h2>
      </div>
    </Wrapper>
  )
}

export default Card
