import { TaskProps } from "../../../../../../App";
import { TaskMainTableListTaskContainer } from "./styles";

import { CheckCircle, Trash } from 'phosphor-react';

interface Props {
    task: TaskProps
}

export function TaskComponent({ task }: Props) {
    const isCompleted = true
    return (
        <TaskMainTableListTaskContainer>
            <table>
                <tbody>
                    <td>
                        <button>{isCompleted ? <CheckCircle /> : <div />}</button>
                        <p>{task.title}</p>
                        <Trash size={22} />
                    </td>
                </tbody>
            </table>
        </TaskMainTableListTaskContainer>
    )
}

