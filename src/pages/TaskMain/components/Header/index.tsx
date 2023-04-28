import { TaskMainHeaderContainer } from "./styles";
import igniteLogo from '../../../../assets/ignite-logo.svg'

export function Header() {
    return (
        <TaskMainHeaderContainer>
            <img src={igniteLogo} alt="" />
        </TaskMainHeaderContainer>
    )
}