import Wrapper from '../assets/wrappers/Modal.jsx'
import warningIcon from '../assets/loading/warning.svg'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice.jsx'
import { useState } from 'react'
import { clearData } from '../features/geolocation/geolocationSlice.jsx'

function Modal () {
  const [className, setClassName] = useState('show')
  const dispatch = useDispatch()


  const handleModal = () => {
    setClassName('hide')
    dispatch(closeModal())
    dispatch(clearData())
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
