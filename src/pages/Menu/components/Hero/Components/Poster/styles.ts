import { styled } from "styled-components";


export const Container = styled.div`
     display: flex;
     justify-content: center;
     width: 1500px;
     .slide {
          width: 100%;
          position: relative;
          cursor: pointer;
     }


    .inner-slide {
          height: 600px;
          display: flex;
          overflow: hidden;
    }
    
    img {
          width: 1500px;
    }

   
     .buttons {
          position: absolute;
          display: flex;
          top: 0%;
          gap: 1340px;
     }
     
     .prev-button , .next-button {
          
          border-radius: 5px;
          width: 80px;
          height: 250px;
          display: flex;
          justify-content: center;
          img {
               width: 40px;
          }
     }
     
     /*
     .prev-button:hover {
          box-shadow: inset 0 0 0 2px #FFF, inset 0 0 0 4px #008296;
     }
     
     .next-button:focus {
          box-shadow: inset 0 0 0 2px #FFF, inset 0 0 0 4px #008296;
     }
     */
     

    .cards {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          position: absolute;
          top: 42%;
    }

`;