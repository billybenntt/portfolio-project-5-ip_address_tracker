import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    width: 150px;
    font-family: 'Rubik', sans-serif, serif;
    display: flex;
    place-items: center;
    align-items: center;
    padding: 0.8rem;

    .loading-img {
        width: 50%;
    }

    .loading-text {
        display: none;
        letter-spacing: 0.1rem;
    }


`
export default Wrapper