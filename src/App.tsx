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
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true
    },
    {
      id: 'teste2',
      title: 'teste2',
      isCompleted: false
    }
  ])

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Input onAddTask={addTask} />
      <TaskContainer tasks={tasks} />
      <GlobalStyle />
    </ThemeProvider>
  )
}