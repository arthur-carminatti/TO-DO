import igniteLogo from '../../assets/ignite-logo.svg'
import { PlusCircle } from 'phosphor-react';

import { TaskMainHeaderContainer, TaskMainInputContainer } from "./styles";


export function TaskMain() {
    return (
        <>
            <TaskMainHeaderContainer>
                <img src={igniteLogo} alt="" />
            </TaskMainHeaderContainer>

            <TaskMainInputContainer>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button>Criar <PlusCircle size={20}/></button>
            </TaskMainInputContainer>
        </>

    )
}