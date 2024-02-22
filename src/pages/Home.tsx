import {useEffect} from 'react'
import Wrapper from '../assets/wrappers/Home.tsx'
import Searchbar from '../components/Searchbar.tsx'
import Card from '../components/Card.jsx'
import Map from '../components/Map.tsx'
import Modal from '../components/Modal.tsx'
import Loading from '../components/Loading.tsx'
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {getAllData} from '../features/geolocation/geolocationSlice.tsx'

function HomePage() {

    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(store => store.geolocation)
    const {isOpen} = useAppSelector(store => store.modal)

    console.log(isOpen)

    useEffect(() => {
        /* Effect */
        dispatch(getAllData())
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
