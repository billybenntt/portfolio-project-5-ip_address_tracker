import Wrapper from '../assets/wrappers/SearchBar.tsx'
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {SubmitFormEvent, ChangeFormEvent} from "../types/app";
import SearchIcon from "../assets/SearchIcon.tsx";
import {handleChange, searchGeoLocation} from "../features/geolocation/geolocationSlice.ts";

function SearchBar() {
    const dispatch = useAppDispatch()
    const {query} = useAppSelector(store => store.geolocation)

    const handleSubmit = (event: SubmitFormEvent) => {
        event.preventDefault()
        const formElement = event.target as HTMLFormElement
        const isValid = formElement.checkValidity()

        console.log(isValid)
        dispatch(searchGeoLocation())


    }

    const handleSearch = (event: ChangeFormEvent) => {
        const inputValue = event.target.value
        dispatch(handleChange({inputValue}))
    }


    return (
        <Wrapper>
            <form className="form-center" onSubmit={handleSubmit}>
                <input type="text"
                    pattern="(https?:\/\/(www\.)?)?((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([a-zA-Z]{2,}))|((?!192\.168)(\d{1,3}\.){3}\d{1,3})"
                    maxLength={35}
                    name="query"
                    title="📝Enter a valid IP address or domain eg. google.com"
                    minLength={10}
                    value={query}
                    required={true}
                    autoFocus={false}
                    autoComplete="off"
                    onChange={handleSearch}
                    placeholder="Search for any IP address or domain"
                    className="search-input"
                />
                <button className="btn-container" type="submit">
                    <SearchIcon/>
                </button>

            </form>
        </Wrapper>
    )
}

export default SearchBar
