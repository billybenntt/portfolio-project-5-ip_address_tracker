import Wrapper from '../assets/wrappers/Home.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.jsx'


function HomePage () {

  return (
    <Wrapper>
      <section className="header">
        Header
      </section>

      <Card/>

      <Map/>
    </Wrapper>
  )
}

export default HomePage
