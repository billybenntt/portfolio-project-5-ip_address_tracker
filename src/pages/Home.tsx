import {useEffect} from 'react'
import Wrapper from '../assets/wrappers/Home.tsx'
import {Searchbar, Card, Map, Loading} from '../components'
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {getGeoLocation} from '../features/geolocation/geolocationSlice.ts'

function HomePage() {

    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(store => store.geolocation)


    useEffect(() => {
        dispatch(getGeoLocation())
    }, [dispatch])


    return (
        <Wrapper>
            <section className="header">
                {isLoading ? <Loading/> : ''}
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
