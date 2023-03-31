import igniteNoItensList from '../assets/ignite-no-itens-list.svg';

import styles from '../css/Task.module.css'

export function Task() {
    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <div className={styles.created}>

                    <p className={styles.pTasks}>Tarefas Criadas</p>
                    
                </div>

                <div className={styles.done}>
                    <p>Concluídas</p>

                </div>
            </div>

            <div className={styles.empty}>
                <img className={styles.img} src={igniteNoItensList} alt="" />
                <div className={styles.text}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}