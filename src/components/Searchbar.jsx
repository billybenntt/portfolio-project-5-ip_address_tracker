import Wrapper from '../assets/wrappers/SearchBar.jsx'
import { FaChevronRight } from 'react-icons/fa'

function Searchbar () {
  return (
    <Wrapper>
      <form className="form-center">
        <input type="text"
          placeholder="Search for any IP address or domain"
          className="search-input"/>

        <div className="btn-container">
          <FaChevronRight/>
        </div>

      </form>
    </Wrapper>
  )
}

export default Searchbar
