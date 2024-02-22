import Wrapper from '../assets/wrappers/SearchBar.tsx'
import {useAppSelector} from '../store/hooks.ts';
import {SubmitFormEvent, ChangeFormEvent} from "../types/app";

function Searchbar() {
    // const dispatch = useAppDispatch()
    const {query} = useAppSelector(store => store.geolocation.search)

    const handleSubmit = (event: SubmitFormEvent) => {
        event.preventDefault()
    }

    const handleSearch = (event: ChangeFormEvent) => {

        console.log(event)
        // const inputName = event.target.name
        // const inputValue = event.target.value
        // dispatch(handleChange({inputName, inputValue}))
    }

    return (
        <Wrapper>
            <form className="form-center" onSubmit={handleSubmit}>
                <input type="text"
                    onChange={handleSearch}
                    value={query}
                    placeholder="Search for any IP address or domain"
                    className="search-input"/>

                <button className="btn-container" type="submit" onClick={handleSubmit}>
                    {/*<FaChevronRight/>*/}
                </button>

            </form>
        </Wrapper>
    )
}

export default Searchbar
