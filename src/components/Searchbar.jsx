import Wrapper from '../assets/wrappers/SearchBar.jsx'
import Chevron from '../assets/images/chevronIcon.jsx'

function Searchbar () {
  return (
    <Wrapper>
      <form className="form-center">
        <input type="text"
          placeholder="Search for any IP address or domain"
          className="search-input"/>

        <div className="btn-container">
          <Chevron/>
        </div>


      </form>
    </Wrapper>
  )
}

export default Searchbar
