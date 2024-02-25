import Wrapper from '../assets/wrappers/SearchBar.tsx'
import {useAppSelector} from '../store/hooks.ts';
import {SubmitFormEvent, ChangeFormEvent} from "../types/app";
import SearchIcon from "../assets/SearchIcon.tsx";

function SearchBar() {
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
                    pattern="(https?:\/\/(www\.)?)?((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([a-zA-Z]{2,}))|((\d{1,3}\.){3}\d{1,3})"
                    maxLength={35}
                    minLength={4}
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search for any IP address or domain"
                    className="search-input"
                />

                <button className="btn-container" type="submit" onClick={handleSubmit}>
                    <SearchIcon/>
                </button>

            </form>
        </Wrapper>
    )
}

export default SearchBar
