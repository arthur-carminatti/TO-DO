import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { useState } from 'react'
import { Header } from './pages/TaskMain/components/Header'
import { Input } from './pages/TaskMain/components/Input'
import { TaskContainer } from './pages/TaskMain/components/Tasks'

export interface TaskProps {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        isCompleted: false,
        id: String(new Date().getTime())
      }
    ])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Input onAddTask={addTask} />
      <TaskContainer
        tasks={tasks}
        onDelete={deleteTask}
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}