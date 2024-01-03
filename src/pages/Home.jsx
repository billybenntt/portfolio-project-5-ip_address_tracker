import Wrapper from '../assets/wrappers/Home.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.jsx'
import Modal from '../components/Modal.jsx'
import Loading from '../components/Loading.jsx'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../features/geolocation/geolocationSlice.jsx'

function HomePage () {

  const dispatch = useDispatch()
  const { isLoading } = useSelector(store => store.geolocation)
  const { isOpen } = useSelector(store => store.modal)

  console.log(isOpen)

  useEffect(() => {
    /* Effect */
    dispatch(getAllData())
  }, [dispatch])

  return (
    <Wrapper>
      {isOpen ? <Modal/> : ''}
      <section className="header">
        {isLoading ? <Loading/> : ''}
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
