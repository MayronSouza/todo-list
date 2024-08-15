import styles from './Content.module.css'

import Clipboard from '../assets/clipboard.png'

export function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <p>Tarefas criadas: 0</p>
        <p>Concluídas: 0</p>
      </div>
      <hr />
      <div className={styles.tasks}>
        <div className={styles.empty}>
          <img src={Clipboard} alt="empty" />
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
} 