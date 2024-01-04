import styled from 'styled-components'

const Wrapper = styled.div`

    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 5000;
        background-color: rgba(0, 0, 0, 0.5);
    }


    // MODAL MAIN

    .modal {
        border-radius: 15px;
        background-color: #fff;
        height: 100px;
        min-width: 100px;
        position: absolute;
        top: 20%;
        left: 50%;
    }

    .modal.show-animation {
        animation: showModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }




    // MODAL CONTENT

    .modal-center {
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        color: #000;
        text-align: center;
        border-radius: 15px;
        padding: 2rem 3rem 2rem;
    }

    .modal-center img {
        width: 82px;
        margin-bottom: 15px;
    }

    .modal-btn {
        background-color: #E35B65;
        border: none;
        border-radius: 5px;
        width: 200px;
        padding: 14px;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }

    .modal-btn:active {
        background-color: #dc143c;
        transition: all 0.1s ease-in;
    }

    .modal-btn:hover {
        transition: all 0.1s ease-in;
        transform: scale(1.1);
    }


    .modal-center .close {
        width: 20px;
        font-size: 20px;
        color: #c0c5cb;
        align-self: flex-end;
        background-color: transparent;
        border: none;
        margin-bottom: 1px;
    }


    // MODAL ANIMATION

    @keyframes showModal {
        0% {
            transform: translate(-0%, -5000%);
        }

        100% {
            transform: translate(-50%, -50%);
        }
    }




`
export default Wrapper