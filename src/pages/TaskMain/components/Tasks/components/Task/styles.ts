import styled from "styled-components";

export const TaskMainTableListTaskContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 46rem;

    td {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem;
        gap: 0.75rem;

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
            min-width: 1.25rem;
            height: 1.25rem;

            border: none;
            border-radius: 50%;
            background: none;

            box-shadow: 0;

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