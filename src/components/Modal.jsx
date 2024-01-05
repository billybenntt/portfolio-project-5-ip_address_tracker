import Wrapper from '../assets/wrappers/Modal.jsx'
import warningIcon from '../assets/loading/warning.svg'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice.jsx'

function Modal () {

  const dispatch = useDispatch()
  const { isOpen } = useSelector(store => store.modal)



  const handleModal = () => {
    dispatch(closeModal())
  }


  return (
    <Wrapper>
      <div className="modal-background">
        <div className={`modal show`}>
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
