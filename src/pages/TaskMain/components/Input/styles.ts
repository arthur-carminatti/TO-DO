import styled from "styled-components";

export const TaskMainInputContainer = styled.div`
    width: 46rem;
    height: 3.375rem;
    left: calc(50% - 46rem/2);
    top: 10.813rem;
    gap: 8px;

    display: flex;
    position: absolute;

    input {
        background-color: ${props => props.theme["gray-500"]};
        border: 1px solid ${props => props.theme["gray-700"]};
        color: ${props => props.theme["-white"]};
        border-radius: 8px;

        width: 638px;
        height: 54px;
        padding: 16px;

        align-items: center;
    }

    button {
        background-color: ${props => props.theme["blueDark"]};

        width: 90px;
        height: 52px;

        justify-content: center;
        align-items: center;
        padding: 16px;

        display: flex;
        gap: 4px;

        border-radius: 8px;
        border: 1px solid ${props => props.theme["blueDark"]};

        color: ${props => props.theme["-white"]};
        font-weight: 500;
    }
`