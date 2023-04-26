import igniteLogo from '../../assets/ignite-logo.svg'
import { TaskMainHeaderContainer } from "./styles";

export function TaskMain() {
    return (
        <TaskMainHeaderContainer>
            <img src={igniteLogo} alt="" />
        </TaskMainHeaderContainer>
    )
}