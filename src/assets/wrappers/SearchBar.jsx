import styled from 'styled-components'

const Wrapper = styled.div`

  margin-left: auto;
  margin-right: auto;
  width: 327px;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 1rem;

  .form-center {
    height: 58px;
    display: flex;
  }

  .btn-container {
    background-color: black;
    height: 100%;
    width: 58px;
  }

  .search-input {
    border: 1px solid black;
    width: 100%;
    font-size: 18px;
    padding: 1rem;
    letter-spacing: 1px;
    height: 100%;
  }


  @media screen and (min-width: 992px) {
    width: 555px;

  }




`

export default Wrapper
