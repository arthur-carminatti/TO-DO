import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Props, TaskContainer } from "./components/Tasks";

export function TaskMain({ tasks }: Props) {
    return (
        <>
            <Header />
            <Input />
            <TaskContainer tasks={tasks}/>
        </>
    )
}