import {
    TaskMainEmptyTaskContainer,
    TaskMainInfoCreatedContainer,
    TaskMainInfoDoneContainer,
    TaskMainInfoTaskContainer,
    TaskMainTaskContainer
} from "./styles";

import taskEmptyLogo from '../../../../assets/ignite-no-itens-list.svg'
import { TaskComponent } from "./components/Task/index";

import { TaskProps } from "../../../../App";

export interface Props {
    tasks: TaskProps[]
}

export function TaskContainer({ tasks }: Props) {
    const taskLength = tasks.length
    const completedTasks = tasks.filter((task) => task.isCompleted).length

    return (
        <TaskMainTaskContainer >
            <TaskMainInfoTaskContainer>
                <TaskMainInfoCreatedContainer>
                    <p>Tarefas criadas</p>
                    <span>{taskLength}</span>
                </TaskMainInfoCreatedContainer>

                <TaskMainInfoDoneContainer>
                    <p>Concluídas</p>
                    <span>
                        {completedTasks} de {taskLength}
                    </span>
                </TaskMainInfoDoneContainer>
            </TaskMainInfoTaskContainer>

            {tasks.map((task) => (
                <TaskComponent key={task.id} task={task} />
            ))}

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