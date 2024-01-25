import { styled } from "styled-components";

interface overlayProps {
    onClick?: () => void,
    onMouseEnter?: ()=> void,
}
export const Overlay = styled.div<overlayProps>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    cursor: default;
`;