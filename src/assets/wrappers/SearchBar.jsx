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
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 58px;
  }

  .search-input {
    width: 100%;
    font-size: 14px;
    padding: 1rem;
    height: 100%;
  }


  .search-input::placeholder {
    color: gray;
  }


  @media screen and (min-width: 992px) {
    width: 555px;






    .search-input {
      font-size: 18px;
      letter-spacing: 1px;

    }


  }




`

export default Wrapper
