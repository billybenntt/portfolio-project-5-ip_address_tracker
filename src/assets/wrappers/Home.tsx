    import styled from 'styled-components'
    import imgDesktop from '../images/pattern-bg-desktop.png'
    import imgMobile from '../images/pattern-bg-mobile.png'

    const Wrapper = styled.div`
    
        .header {
            position: relative;
            background: url(${imgMobile}) no-repeat center;
            text-align: center;
            background-size: cover;
            color: #fff;
            height: 18.75rem;
        }
    
    
        .header-center {
            padding-top: 2rem;
            padding-bottom: 0.5rem;
        }
    
    
        @media screen and (min-width: 992px) {
            .header {
                background: url(${imgDesktop}) no-repeat center;
                background-size: cover;
            }
    
        }
    
    
    
    `

    export default Wrapper
