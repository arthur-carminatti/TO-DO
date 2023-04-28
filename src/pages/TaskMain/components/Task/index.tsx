import {
    TaskMainEmptyTaskContainer,
    TaskMainInfoCreatedContainer,
    TaskMainInfoDoneContainer,
    TaskMainInfoTaskContainer,
    TaskMainTableListTaskContainer,
    TaskMainTaskContainer
} from "./styles";

import taskEmptyLogo from '../../../../assets/ignite-no-itens-list.svg'
import { CheckCircle, Trash } from 'phosphor-react';

const isCompleted = true

export function TaskContainer() {
    return (
        <TaskMainTaskContainer >
            <TaskMainInfoTaskContainer>
                <TaskMainInfoCreatedContainer>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </TaskMainInfoCreatedContainer>

                <TaskMainInfoDoneContainer>
                    <p>Concluídas</p>
                    <span>0</span>
                </TaskMainInfoDoneContainer>
            </TaskMainInfoTaskContainer>

            <TaskMainEmptyTaskContainer>
                <img src={taskEmptyLogo} alt="" />
                <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <br /> Crie tarefas e organize seus itens a fazer
                </p>
            </TaskMainEmptyTaskContainer>

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
        </TaskMainTaskContainer>
    )
}