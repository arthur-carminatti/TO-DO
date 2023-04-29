import { TaskProps } from "../../../../../../App";
import { TaskMainTableListTaskContainer } from "./styles";

import { CheckCircle, Trash } from 'phosphor-react';

interface Props {
    task: TaskProps
    onDelete: (taskId: string) => void
}

export function TaskComponent({ task, onDelete }: Props) {
    const isCompleted = true

    function deleteTaskId() {
        onDelete(task.id)
    }

    return (
        <TaskMainTableListTaskContainer>
            <table>
                <tbody>
                    <td>
                        <button>{isCompleted ? <CheckCircle /> : <div />}</button>
                        <p>{task.title}</p>
                        <button onClick={deleteTaskId}><Trash /></button>
                    </td>
                </tbody>
            </table>
        </TaskMainTableListTaskContainer>
    )
}

