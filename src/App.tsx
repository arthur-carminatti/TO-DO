import './css/global.module.css';
import styles from './css/app.module.css';

import igniteLogo from './assets/ignite-logo.svg';

function App() {

  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo" />
        <input className={styles.input} type="text" />
      </header>

      <body className={styles.body}>
      </body>

      <div>

      </div>
    </div>
  )
}

export default App
