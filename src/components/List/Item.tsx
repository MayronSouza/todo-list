import { Check, Trash } from '@phosphor-icons/react'
import styles from './Item.module.css'
import { ITasks } from '../../App'

interface ItemProps {
  data: ITasks
}

export function Item({ data }: ItemProps) {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span>
            {data.isChecked && <Check size={12} />}
          </span>
          <p>{data.text}</p>
        </label>
      </div>
      
      <button>
        <Trash size={16} color='#808080' />
      </button>
    </div>
  )
}