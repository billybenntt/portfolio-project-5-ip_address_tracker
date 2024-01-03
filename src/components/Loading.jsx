import Wrapper from '../assets/wrappers/Loading.jsx'
import loadingIcon from '../assets/loading/loading.svg'

function Loading () {
  return (
    <Wrapper>
        <img src={loadingIcon} alt="loading" className="loading-img"/>
        <p className="loading-text">Loading..</p>
    </Wrapper>
  )
}
export default Loading
