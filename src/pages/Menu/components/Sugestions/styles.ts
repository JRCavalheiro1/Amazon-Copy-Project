import { styled } from "styled-components";

export const Container = styled.div`
    
    .nav-sugestions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3.8rem;
        background: #232f3e;
        color: #ffffff;
        font-size: 1.33rem;
    }

    .all-sugestions-btn {
        display: flex;
        justify-content: center;
        padding: 0.8rem 0.9rem;
        gap: 0.4rem;
        font-weight: 600;
        font-size: 1.4rem;
        margin-left: 1.8rem;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .all-sugestions-btn:hover, li:hover {
        border-color: #ffffff;
    }
//1652px
    .nav-sugestions-bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .list-body {
        display: flex;
        list-style: none;
    }

    .list-sugest {
        white-space:nowrap;
        position: static;
        padding: 8px 9px;
        border-radius: 3px;
        border: 1px solid transparent;
        cursor: pointer;
        font-size: 1.4rem;
    }
    
    //1740px
    .nav-sugest-title {
        width: 400px;
        display: flex;
        margin-right: 50px;
        white-space:nowrap;
        justify-content: flex-end;
        font-size: 1.2rem;
        padding: 0px 10px 0px 10px; 
        border: 1px solid transparent;
        cursor: pointer;
    }
    .nav-sugest-title:hover {
        border-color: #ffffff;
    }


    @media(max-width: 1740px) {
        li:nth-child(13) {
            display: none;
        }
    }
    @media(max-width: 1640px) {
        li:nth-child(12) {
            display: none;
        }
    }
    @media(max-width: 1550px) {
        li:nth-child(11) {
            display: none;
        }
    }
    @media(max-width: 1480px) {
        li:nth-child(10) {
            display: none;
        }
        
    }
    @media(max-width: 1380px) {
        li:nth-child(9) {
            display: none;
        }
    }
    @media(max-width: 1280px) {
        li:nth-child(8) {
            display: none;
        }
    }
    @media(max-width: 1200px) {
        li:nth-child(7) {
            display: none;
        }
    }

    @media(max-width: 1150px) {
        li:nth-child(6) {
            display: none;
        }
    }
    @media(max-width: 1012px) {
        .nav-sugestions {
            width: 1012px;
        }
    }
    
    `;

