import styles from '../css/NewTask.module.css'

export function NewTask() {
    return (
        <div className={styles.task}>
            <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.button}>Criar</button>
        </div>
    )
}