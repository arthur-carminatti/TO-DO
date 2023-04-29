import { TaskMainTableListTaskContainer } from "./styles";

import { CheckCircle, Trash } from 'phosphor-react';

export function TaskComponent() {
    const isCompleted = true
    return (
        <TaskMainTableListTaskContainer>
            <table>
                <tbody>
                    <td>
                        <button>{isCompleted ? <CheckCircle /> : <div />}</button>
                        <p>Sua atividade selecionada</p>
                        <Trash size={22} />
                    </td>
                    <td>
                        <button>{isCompleted ? <CheckCircle /> : <div />}</button>
                        <p>Sua atividade selecionada</p>
                        <Trash size={22} />
                    </td>
                    <td>
                        <button>{isCompleted ? <CheckCircle /> : <div />}</button>
                        <p>Sua atividade selecionada</p>
                        <Trash size={22} />
                    </td>
                </tbody>
            </table>
        </TaskMainTableListTaskContainer>
    )
}

