import styled from 'styled-components'

const Wrapper = styled.div`
    /* MODAL CONTAINER */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.5);

    .modal {
        border-radius: 15px;
        background-color: #fff;
        height: 100px;
        min-width: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        /* Center Modal */
        transform: translate(-50%, -300%);
    }

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

    .modal-center .accept {
        background-color: #E35B65;
        border: none;
        border-radius: 5px;
        width: 200px;
        padding: 14px;
        font-size: 16px;
        color: white;
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

`
export default Wrapper