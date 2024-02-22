import Wrapper from '../assets/wrappers/Modal.tsx'
import warningIcon from '../assets/loading/warning.svg'
import {useState} from 'react'

function Modal() {
    const [className, setClassName] = useState('show')

    const handleModal = () => {
        setClassName('hide')
    }

    return (
        <Wrapper>
            <div className="modal-background">
                <div className={`modal ${className}`}>
                    <div className="modal-center">
                        <button className="close" onClick={handleModal}>✖</button>
                        <img src={warningIcon} alt="cookies-img"/>
                        <p>Kindly input a valid IP address; the provided one appears to be invalid.
                        </p>
                        <button className="modal-btn" onClick={handleModal}>Try again?</button>
                    </div>
                </div>
            </div>
        </Wrapper>

    )
}

export default Modal
