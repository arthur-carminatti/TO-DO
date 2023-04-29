import {
    TaskMainEmptyTaskContainer,
    TaskMainInfoCreatedContainer,
    TaskMainInfoDoneContainer,
    TaskMainInfoTaskContainer,
    TaskMainTaskContainer
} from "./styles";

import taskEmptyLogo from '../../../../assets/ignite-no-itens-list.svg'
import { TaskComponent } from "./components/Task/index";

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

            <TaskComponent />

            <TaskMainEmptyTaskContainer>
                <img src={taskEmptyLogo} alt="" />
                <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <br /> Crie tarefas e organize seus itens a fazer
                </p>
            </TaskMainEmptyTaskContainer>

        </TaskMainTaskContainer>
    )
}