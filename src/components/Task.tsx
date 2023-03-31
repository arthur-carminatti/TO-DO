import styles from '../css/Task.module.css'

export function Task() {
    return (
        <div className={styles.task}>
            <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.button}>Criar</button>
        </div>
    )
}