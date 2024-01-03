import Wrapper from '../assets/wrappers/Modal.jsx'
import warningIcon from '../assets/loading/warning.svg'

function Modal () {
  return (
    <Wrapper>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-center">
            <button className="close">✖</button>
            <img src={warningIcon} alt="cookies-img"/>
            <p>Kindly input a valid IP address; the provided one appears to be invalid.
            </p>
            <button className="accept">Try again?</button>
          </div>
        </div>
      </div>
    </Wrapper>

  )
}

export default Modal
