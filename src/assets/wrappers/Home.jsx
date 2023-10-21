import styled from 'styled-components'
import img from '../images/pattern-bg.png'

const Wrapper = styled.div`
  .header {
    position: relative;
    background: url(${img}) no-repeat center;
    text-align: center;
    background-size: cover;
    color: #fff;
    height: 300px;
  }

  .header-center {
    padding-top: 2rem;
  }

`

export default Wrapper
