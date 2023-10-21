import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 327px;
  z-index: 999;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 50px 50px -25px rgba(0, 0, 0, 0.10);

  .card-center {
    display: flex;
    flex-direction: column;
  }


  .card {
    text-align: left;
    flex: 1;
    padding-left: 2rem;

  }

  .card:last-child {
    border: none;
  }


  .card-title {
    font-size: 14px;
    margin-bottom: 0.5rem;
    font-weight: bolder;
    text-transform: uppercase;
    color: gray;
  }

  .card-data {
    font-size: 24px;
  }


  @media screen and (min-width: 992px) {
    max-width: 1110px;
    height: 161px;
    top: 210px;

    .card-center {
      display: flex;
      flex-direction: row;
    }


    .card {
      border-right: 1px solid #c5bebe;
    }


  }





`
export default Wrapper