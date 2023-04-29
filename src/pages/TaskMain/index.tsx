import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TaskContainer } from "./components/Tasks";

export function TaskMain() {
    return (
        <>
            <Header />
            <Input />
            <TaskContainer />
        </>

    )
}