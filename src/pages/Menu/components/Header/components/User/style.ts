import { styled } from "styled-components";

export const Container = styled.div`
    .nav-user {
        height: 100%;
        width: 12.814rem;
        position: relative;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 9px 10px 9px 10px;
    }

    .nav-user:hover  {
        border-color: #ffffff;
        .triangle-modal {
            display: block;
        }
    }

    span {
        display: block;
        font-size: 1.2rem;
        line-height: 1;
    }
    span:nth-child(2) {
        font-size: 1.3rem;
        font-weight: 600;
        display: inline;
    }
    .triangle-modal {
        display: none;
        position: absolute;
        right: -120px;
        top: 36.5px;
        width: 50rem;
        cursor: default;
        
        .arrow-up {
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid #ffffff;
            margin-left: 353px;
            margin-bottom: 0px;
            height: 0;
            width: 0;
        }
    }

    .modal {
        background: #fff;
        height: 44.0rem;
        width: 100%;
        border-left: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        border-radius: 3px;
    }


    .modal-content {
        display: block;
        text-align: center;
        
        Button {
            margin-bottom: 5px;
        } 

        p {
            display: inline;
            color: #747475;
            font-size: 1rem;
        }
        
        a {
            color: var( --link-color);
            cursor: pointer;
            text-decoration: none;
        }
        
        a:hover {
            color: var(--link-color-hover);
            text-decoration: underline;
        }

        .horizontal-line {
            width: 90%;
            margin-left: 25px;
            margin-top: 1rem;
            border: none;
            height: 1px;
            background: #e6e6e6;
        }

        .list, .list-tools {
            color: #000000;
        }

        .account-pref {
            display: flex;
            justify-content: center;
            gap: 2rem;    
            text-align: start;
            margin-top: 10px;
        }
        .list {
            margin-right: 90px;
            a {
                font-size: 1.2rem;
            }
        }
        .list-tools {
            h2, ul {
                display: block;
            }

            ul {
                list-style: none;
                line-height: 2;
                li:nth-child(8), li:nth-child(11) {
                    line-height: 1;
                }
                a {
                    font-size: 1.3rem;
                }
                
            }
        }
        .link-modal {
            font-weight: 400;
            font-size: 1.1rem;
            color: #6f777c;
        }

        .link-modal:hover {
            color: var(--link-color-hover);
        }

        .vertical-line {
            width: 1px;
            height: 100%;
            border-left: 1px solid;
            border-top-color: transparent;
        }
    }
`;

