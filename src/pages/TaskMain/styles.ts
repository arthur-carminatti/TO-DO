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

export const TaskMainTaskContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1.5rem;

    position: absolute;
    width: 46rem;
    height: 17.938rem;
    left: calc(50% - 46rem/2);
    top: 18.188rem;
`

export const TaskMainInfoTaskContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;

    width: 736px;
    height: 19px;
`

export const TaskMainInfoCreatedContainer = styled.div`

    display: flex;
    align-items: center;
    padding: 0px;

    gap: 8px;

    p {
        color: ${props => props.theme["-blue"]};
        font-weight: 500;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        gap: 10px;

        width: 25px;
        height: 19px;

        border-radius: 50%;

        font-size: 12px;
        line-height: 15px;

        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["-white"]};
    }
`

export const TaskMainInfoDoneContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 111px;
    height: 19px;

    p {
        color: ${props => props.theme["-purple"]};
        font-weight: 500;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        gap: 10px;

        width: 25px;
        height: 19px;

        border-radius: 50%;

        font-size: 12px;
        line-height: 15px;

        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["-white"]};
    }
`

export const TaskMainEmptyTaskContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 64px 24px;
    gap: 16px;

    width: 736px;
    height: 244px;

    border-top: 1px solid ${props => props.theme["gray-400"]};
    border-radius: 8px;

    align-self: stretch;

    img {
        width: 56px;
        height: 56px;
    }

    p {
        width: 688px;
        height: 44px;

        text-align: center;
        font-size: 16px;
        line-height: 140%;

        color: ${props => props.theme["gray-300"]};

        span {
            font-weight: 700;
        }
    }
`