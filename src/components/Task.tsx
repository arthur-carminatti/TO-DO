import igniteNoItensList from '../assets/ignite-no-itens-list.svg';

import styles from '../css/Task.module.css'

import { TbTrash } from "react-icons/tb";

export function Task() {
    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <div className={styles.created}>

                    <p className={styles.pTasks}>Tarefas Criadas</p>
                    <span>10</span>

                </div>

                <div className={styles.done}>
                    <p>Concluídas</p>
                    <span>2 de 10</span>

                </div>
            </div>

            <div className={styles.empty}>
                <img className={styles.img} src={igniteNoItensList} alt="" />
                <div className={styles.text}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>

            <div >
                <div className={styles.taskCreated}>
                    <button className={styles.checkContainter}>
                        <div />
                    </button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corporis nisi similique iusto expedita saepe unde inventore quis odio, possimus perferendis.</p>
                    <button className={styles.deleteButton}>
                        <TbTrash size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}