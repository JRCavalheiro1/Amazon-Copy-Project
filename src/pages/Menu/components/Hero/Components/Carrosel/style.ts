import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1500px;

    .carrousel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 100px;
        border: 20px solid #ffffff;
        width: 100vw;
        position: relative;
        background: #ffffff;
        overflow: hidden;

    }
    .inner-carrosel {
        display: flex;
        gap: 10px;
    }


   h1 {
    white-space:nowrap;
   }

    .buttons {
        display: flex;
        width: 100%;
        justify-content: space-between;
        position: absolute;

    }

    .prev-button, .next-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 100px;
        background: #ffffff;
        border-radius: 3px;
        cursor: pointer;

        img {
            width: 22px;
            height: 22px;
        }
        
    }

    .prev-button {
        box-shadow: 2px 1px 3px 0px rgba(0,0,0,0.3);
    }

    .next-button {
        box-shadow: -2px 1px 3px 0px rgba(0,0,0,0.3);
    }



`;