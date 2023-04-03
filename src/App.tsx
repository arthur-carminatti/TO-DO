import './css/Global.module.css';

import styles from './css/App.module.css'

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { useState } from 'react';

export interface InterfaceTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<InterfaceTask[]>([
    {
      id: 'teste',
      title: 'teste',
      isCompleted: true,
    }
  ]);

  return (
    <div>

      <Header />

      <body className={styles.body}>
        <div>
          <NewTask />
        </div>

        <div>
          <Task 
            tasks={tasks}
          />
        </div>


      </body>

      <div>

      </div>
    </div>
  )
}

export default App
