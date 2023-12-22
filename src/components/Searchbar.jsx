import Wrapper from '../assets/wrappers/SearchBar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { FaChevronRight } from 'react-icons/fa'
import { handleChange } from '../features/geolocation/geolocationSlice.jsx'


function Searchbar () {

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  const handleSearch = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value


    dispatch(handleChange({ inputName, inputValue }))
  }

  return (
    <Wrapper>
      <form className="form-center">
        <input type="text"
          onChange={handleSearch}
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
