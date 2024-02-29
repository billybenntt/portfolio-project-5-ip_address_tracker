import Wrapper from '../assets/wrappers/Card.tsx'
import {useAppSelector} from '../store/hooks.ts';

const Card = () => {

    const {ip, country, isp, timezone} = useAppSelector(store => store.geolocation.search)

    return (
        <Wrapper>
            <div className="card-center">
                <div className="card">
                    <h5 className="card-title">IP Address</h5>
                    <p className="card-data">{ip}</p>
                </div>
                <div className="card">
                    <h5 className="card-title">Country</h5>
                    <p className="card-data">{country}</p>
                </div>
                <div className="card">
                    <h5 className="card-title">Timezone</h5>
                    <p className="card-data">{timezone}</p>
                </div>
                <div className="card">
                    <h5 className="card-title">ISP</h5>
                    <p className="card-data">{isp} </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Card
