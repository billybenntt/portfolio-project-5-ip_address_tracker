import Wrapper from '../assets/wrappers/SearchBar.tsx'
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';

function Searchbar() {
    // const dispatch = useAppDispatch()
    const {query} = useAppSelector(store => store.geolocation.search)

    const handleSubmit = (event: any) => {
        event.preventDefault()
    }

    const handleSearch = (event: any) => {
        const inputName = event.target.name
        const inputValue = event.target.value
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

                <div className="btn-container" onClick={handleSubmit}>
                    {/*<FaChevronRight/>*/}
                </div>

            </form>
        </Wrapper>
    )
}

export default Searchbar
