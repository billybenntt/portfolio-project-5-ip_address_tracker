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
  padding: 1.5rem;
  box-shadow: 0 50px 50px -25px rgba(0, 0, 0, 0.10);

  .card-center {
    display: flex;
    flex-direction: column;
  }


  .card {
    text-align: left;
    flex: 1;
    padding-left: 1rem;

    margin-bottom: 0;
  }

  .card:last-child {
    border: none;
  }


  .card-title {
    color: #727171;
    font-family: 'Rubik', serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .card-data {
    color: #2C2C2C;
    font-family: 'Rubik', serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.132px;
  }


  @media screen and (min-width: 992px) {
    max-width: 900px;
    height: 161px;
    top: 210px;
    padding: 2rem;

    .card-center {
      display: flex;
      flex-direction: row;
    }


    .card {
      height: 75px;
      border-right: 1.5px solid #c5bebe;
    }

    .card-title {
      color: #727171;
      font-family: 'Rubik', serif;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.75px;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .card-data {
      color: #2C2C2C;
      font-family: 'Rubik', serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.232px;
    }


  }
  
  
    @media screen and (min-width: 1400px) {
      
          max-width: 1110px;

      
      
    }






`
export default Wrapper