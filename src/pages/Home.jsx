import Wrapper from '../assets/wrappers/Home.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../features/geolocation/geolocationSlice.jsx'
import loadingIcon from '../assets/loading/loading.svg'

function HomePage () {

  const dispatch = useDispatch()
  const { isLoading } = useSelector(store => store.geolocation)

  useEffect(() => {
    /* Effect */
    dispatch(getAllData())
  }, [dispatch])

  return (
    <Wrapper>
      <section className="header">


        {/*LOADING CONDITIONAL */}
        {isLoading ? <div className="loading-container">
          <img src={loadingIcon} alt="loading" className="loading-img"/>
          <p className="loading-text">Loading..</p>
        </div> : ''}


        <div className="header-center">
          <h4>IP Address Tracker</h4>
        </div>
        <Searchbar/>
        <Card/>
      </section>

      <Map/>
    </Wrapper>
  )
}

export default HomePage
