import styled from "styled-components";

export const TaskMainHeaderContainer = styled.div`
    background: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["-white"]};
    height: 12.5rem;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 7.875rem;
        height: 3rem;
    }
`