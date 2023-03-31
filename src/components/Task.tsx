import igniteNoItensList from '../assets/ignite-no-itens-list.svg';

import styles from '../css/Task.module.css'

export function Task() {
    return(
        <div className={styles.tasks}>
            <div className={styles.info}>
                <div className={styles.created}>

                </div>

                <div className={styles.done}>

                </div>
            </div>

            <div className={styles.empty}>

            </div>
        </div>
    )
}