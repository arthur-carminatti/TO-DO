import './css/global.module.css';
import styles from './css/app.module.css';

import igniteLogo from './assets/ignite-logo.svg';

function App() {

  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo" />
      </header>

      <body className={styles.body}>
        <h1></h1>
      </body>
    </div>

  )
}

export default App
