import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 327px;
    border-radius: 15px;
    margin-bottom: 1rem;
    position: relative;


    .form-center {
        height: 58px;
        display: flex;
        overflow: hidden;
        border: 3px solid #4f59b9;
        border-radius: 1rem;
        transition: all 350ms ease-in-out

    }


    .form-center::before {
        content: "";
        font-size: 10px;
        padding: 0.5rem;
        position: absolute;
        color: #ffff;
        visibility: hidden;
        top: -1.8rem;
        right: 0;
    }


    .form-center:valid {
        .search-input {
            color: #081028;
        }
    }

    .form-center:active:valid {
        &::before {
            content: "Looks good ✅";
            visibility: visible;
        }
        .btn-container {
            color: #90EE90FF;
        }
    }


    .form-center:hover:invalid {
        border: 3px solid #5986e7;

        &::before {
            content: "Please Enter a valid url or IP";
            visibility: visible;
        }

        .search-input::placeholder {
            color: #808080;
        }

        .btn-container {
            cursor: not-allowed;
            background-color: #000;
            color: #fff;
        }
    }


    .btn-container {
        background-color: #000000;
        cursor: pointer;
        display: grid;
        place-items: center;
        width: 58px;
    }

    .btn-container:active {
        transition: all 150ms ease-in-out;

        svg {
            transform: scale(1.1);
        }

    }

    .search-input {
        all: unset;
        width: 100%;
        text-align: left;
        background-color: #fff;
        color: rgba(0, 0, 0, 0.75);
        border: transparent;
        padding: 0 1rem;
        height: 100%;
        font-family: "JetBrains Mono", monospace;
    }

    .search-input::placeholder {
        font-size: 11px;
    }


    @media screen and (min-width: 992px) {
        width: 655px;
        .search-input {
            font-size: 1.1rem;
            letter-spacing: 1px;
        }

        .search-input::placeholder {
            font-size: 18px;
        }

    }




`

export default Wrapper
