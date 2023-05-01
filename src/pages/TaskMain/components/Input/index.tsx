import { ChangeEvent, FormEvent, useState } from "react";
import { TaskMainInputContainer } from "./styles";
import { PlusCircle } from 'phosphor-react';

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function Input({ onAddTask }: Props) {
    const [title, setTitle] = useState('')

    function handleSetTitle(event: FormEvent) {
        event.preventDefault()

        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <TaskMainInputContainer>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={onChangeTitle}
                value={title}
            />
            <button onClick={handleSetTitle}>
                Criar <PlusCircle size={20} />
            </button>
        </TaskMainInputContainer>
    )
}