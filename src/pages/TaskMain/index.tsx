import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TaskContainer } from "./components/Task";

export function TaskMain() {
    return (
        <>
            <Header />
            <Input />
            <TaskContainer />
        </>

    )
}