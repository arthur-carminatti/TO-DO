import './css/Global.module.css';

import styles from './css/App.module.css'

import { Header } from './components/Header';
import { Task } from './components/Task';

function App() {

  return (
    <div>

      <Header />

      <body className={styles.body}>
        
        <Task />

      </body>

      <div>

      </div>
    </div>
  )
}

export default App
