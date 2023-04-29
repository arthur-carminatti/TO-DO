import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { TaskMain } from './pages/TaskMain'
import { useState } from 'react'

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
    }
  ])

  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskMain tasks={tasks} />
      <GlobalStyle />
    </ThemeProvider>
  )
}