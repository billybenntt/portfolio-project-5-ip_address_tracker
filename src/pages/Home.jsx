import { Wrapper, Header } from '../styles/wrappers/Home.jsx'
import Modal from '../components/Modal.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.jsx'
import background from  '../assets/images/pattern-bg.png'

import { useState } from 'react'

function HomePage () {
  const [isModalOpen, setIsModalOpen] = useState(false)



  return (
    <Wrapper>
      {isModalOpen ? <Modal/> : null}
      <Header bg={background}>
        <h1>IP Address Tracker</h1>
        <Searchbar/>
        <Card/>
      </Header>
      <Map/>
    </Wrapper>
  )
}

export default HomePage
