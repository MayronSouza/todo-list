import Clipboard from "../../assets/clipboard.png"

import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="icone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}