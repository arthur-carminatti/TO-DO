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

    width: 46rem;
    height: 1.188rem;
`

export const TaskMainInfoCreatedContainer = styled.div`

    display: flex;
    align-items: center;
    padding: 0px;

    gap: 0.5rem;

    p {
        color: ${props => props.theme["-blue"]};
        font-weight: 500;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.125rem 0.5rem;
        gap: 0.625rem;

        width: 1.563rem;
        height: 1.188rem;

        border-radius: 50%;

        font-size: 0.75rem;
        line-height: 0.938rem;

        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["-white"]};
    }
`

export const TaskMainInfoDoneContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;

    width: 6.938rem;
    height: 1.188rem;

    p {
        color: ${props => props.theme["-purple"]};
        font-weight: 500;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.125rem 0.5rem;
        gap: 0.625rem;

        width: 1.563rem;
        height: 1.188rem;

        border-radius: 50%;

        font-size: 0.75rem;
        line-height: 0.938rem;

        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["-white"]};
    }
`

export const TaskMainEmptyTaskContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4rem 1.5rem;
    gap: 1rem;

    width: 46rem;
    height: 15.25rem;

    border-top: 1px solid ${props => props.theme["gray-400"]};
    border-radius: 8px;

    align-self: stretch;

    img {
        width: 3.5rem;
        height: 3.5rem;
    }

    p {
        width: 43rem;
        height: 2.75rem;

        text-align: center;
        font-size: 1rem;
        line-height: 140%;

        color: ${props => props.theme["gray-300"]};

        span {
            font-weight: 700;
        }
    }
`

export const TaskMainTableListTaskContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 46rem;
    height: 25.5rem;

    td {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem;
        gap: 0.75rem;
        margin-bottom: 0.75rem;

        width: 46rem;
        height: 4.5rem;

        background-color: ${props => props.theme["gray-500"]};
        border: ${props => props.theme["gray-400"]};
        box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.07);
        border-radius: 8px;

        align-self: stretch;

        p {
            width: 100%;
            height: 100%;
            
            align-items: center;
            display: flex;
            color: ${props => props.theme["-white"]};
        }

        svg {
            color: ${props => props.theme["gray-300"]};
        }

        button {
            width: 1.5rem;
            height: 1.5rem;

            border: none;
            border-radius: 50%;
            background: none;

            div {
                width: 100%;
                height: 100%;

                border: 2px solid ${props => props.theme["-blue"]};
                border-radius: 50%;
            }

            svg {
                width: 100%;
                height: 100%;

                color: ${props => props.theme["-blue"]};
            }
        }
    }
`