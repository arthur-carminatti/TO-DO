import './css/Global.module.css';

import styles from './css/App.module.css'

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

function App() {

  return (
    <div>

      <Header />

      <body className={styles.body}>
        <div>
          <NewTask />
        </div> 

        <div>
          <Task/>
        </div>


      </body>

      <div>

      </div>
    </div>
  )
}

export default App
