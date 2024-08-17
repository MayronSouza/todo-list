import { Trash } from '@phosphor-icons/react'
import styles from './Item.module.css'

export function Item() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span>

          </span>
          <p>Desenvolver uma SPA com ReactJS</p>
        </label>
      </div>
      
      <button>
        <Trash size={16} color='#808080' />
      </button>
    </div>
  )
}