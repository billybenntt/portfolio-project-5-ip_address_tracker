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
        overflow: hidden;
        border: 3px solid #4f59b9;
        border-radius: 15px;

    }


    .form-center:invalid {
        border: 3px solid #dc2626;

        .search-input {
            color: #dc2626;
        }

        .btn-container {
            background-color: rgba(220, 38, 38, 0.68);
        }
    }

    .form-center:valid {
        border: 3px solid #4f59b9;
    }

    .form-center:active {
        border: 3px solid #5181d1;

        .btn-container {
            background-color: #000;
            color: #5181d1;
        }

    }

    .btn-container {
        background-color: #000000;
        cursor: pointer;
        display: grid;
        position: relative;
        place-items: center;
        width: 58px;
    }

    .btn-container:hover {
        transition: all 0.4s linear;
    }

    .search-input {
        width: 100%;
        color: rgba(0, 0, 0, 0.75);
        font-size: 11px;
        border: transparent;
        padding: 1rem;
        height: 100%;
        font-family: "JetBrains Mono", monospace;
    }


    @media screen and (min-width: 992px) {
        width: 655px;
        .search-input {
            font-size: 18px;
            letter-spacing: 1px;

        }


    }




`

export default Wrapper
