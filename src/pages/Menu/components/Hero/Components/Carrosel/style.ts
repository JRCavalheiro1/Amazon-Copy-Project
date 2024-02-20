import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1500px;

    .external-carrousel {
        width: 100%;
        margin-top: 100px;
        background: #ffffff;
        position: relative;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .prev-button, .next-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
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
        left: 96%;
    }


    .carrousel {
        height: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        //overflow-x: scroll ;
    }

 /*
    
 .carrousel::-webkit-scrollbar {
     height: 6px;
 }

 .carrousel::-webkit-scrollbar-thumb {
     width: 20px;
     background-color: red;
     border-radius: 8px;
 }
 
 */

    .inner-carrousel {
        display: flex;
        gap: 10px;
        img{ 
            cursor: pointer;
            width: 200px;
        }
    }
   

    .drag-section {
        width: 100%;
        height: 0.6rem;
    }

    .drag-bar {
        width: 25%;
        height: 0.6rem;
        border-radius: 7px;
        cursor: pointer;
        margin-top: 10px;
        background: #888888;

    }

   


`;