import Plus from '../assets/plus.png'
import styles from './Search.module.css'

export function Search() {
  return (
    <div className={styles.search_wrapper}>
      <input type="text" />
      <div>
        <button className={styles.btn} type="button">
          Criar
          <img src={Plus} />
        </button>
      </div>
    </div>
  )
}