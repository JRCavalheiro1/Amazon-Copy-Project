import { styled } from "styled-components";
//1000px

export const Container = styled.div`
    width: 1080px;
    .nav-search {
        display: flex;
        align-items: center;
        padding: 0px 25px 0px 4px;
        position: relative;
    }   
   
   select, input {
        padding: 0.8rem;
        border: none;
    }

    .input-search {
            width: 100%;
            min-width: 190px;
            outline: none;
        }
       
    select {
            position: relative;
            border: none;
            cursor: pointer;
            background: #e6e6e6;
            font-size: 1rem;
            padding-top: 1rem;
            padding-bottom: 0.9rem;
            color: #596068;
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
        }
      
        .submit {
            display: flex;
            align-items: center;
            justify-content: center;
            
            .glass-logo {
                position: absolute;
            }
            .input-submit {
                position: relative;
                width: 4.5rem;
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
                background: #febd69;
            }
        }

        .input-search{
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
        }
        .input-submit{
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-right: 3px solid transparent;
        }
        select {
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-left: 3px solid transparent;
        }


        select:hover {
            filter: brightness(0.9);
            color: #000000;
        }

        .submit:hover {
            filter: brightness(0.97);
            .input-submit {
                background: #f3a847;
            }    
        }

        .submit, .input-submit {
            cursor: pointer;
        }
`;