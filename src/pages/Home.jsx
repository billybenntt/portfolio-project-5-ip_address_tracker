import Wrapper from '../assets/wrappers/Home.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.jsx'

function HomePage () {

  return (
    <Wrapper>
      <section className="header">
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
