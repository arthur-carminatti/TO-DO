import { TaskMainInputContainer } from "./styles";
import { PlusCircle  } from 'phosphor-react';

export function Input() {
    return (
        <TaskMainInputContainer>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>Criar <PlusCircle size={20} /></button>
        </TaskMainInputContainer>
    )
}