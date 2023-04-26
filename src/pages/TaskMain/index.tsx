import {
    TaskMainEmptyTaskContainer,
    TaskMainHeaderContainer,
    TaskMainInfoCreatedContainer,
    TaskMainInfoDoneContainer,
    TaskMainInfoTaskContainer,
    TaskMainInputContainer,
    TaskMainTaskContainer
} from "./styles";

import igniteLogo from '../../assets/ignite-logo.svg'
import taskEmptyLogo from '../../assets/ignite-no-itens-list.svg'

import { PlusCircle } from 'phosphor-react';


export function TaskMain() {
    return (
        <>
            <TaskMainHeaderContainer>
                <img src={igniteLogo} alt="" />
            </TaskMainHeaderContainer>

            <TaskMainInputContainer>
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button>Criar <PlusCircle size={20} /></button>
            </TaskMainInputContainer>

            <TaskMainTaskContainer>
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
            </TaskMainTaskContainer>
        </>

    )
}