import {useEffect} from 'react'
import Wrapper from '../assets/wrappers/Home.tsx'
import {Searchbar, Card, Map, Modal, Loading} from '../components'
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {getGeoLocation} from '../features/geolocation/geolocationSlice.ts'

function HomePage() {

    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(store => store.geolocation)
    const {isOpen} = useAppSelector(store => store.modal)


    useEffect(() => {
        dispatch(getGeoLocation())
    }, [dispatch])


    return (
        <Wrapper>
            {isOpen ? <Modal/> : ''}
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