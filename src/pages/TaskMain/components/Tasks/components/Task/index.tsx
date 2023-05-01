import { TaskProps } from "../../../../../../App";
import { TaskMainTableListTaskContainer } from "./styles";

import { CheckCircle, Trash } from 'phosphor-react';

interface Props {
    task: TaskProps
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function TaskComponent({ task, onDelete, onComplete }: Props) {

    function deleteTaskId() {
        onDelete(task.id)
    }

    return (
        <TaskMainTableListTaskContainer>
            <table>
                <tbody>
                    <td>
                        <button onClick={() => onComplete(task.id)}>
                            {task.isCompleted ? <CheckCircle /> : <div />}
                        </button>
                        <p>{task.title}</p>
                        <button onClick={deleteTaskId}>
                            <Trash />
                        </button>
                    </td>
                </tbody>
            </table>
        </TaskMainTableListTaskContainer>
    )
}

