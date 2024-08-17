import { Check, Trash } from '@phosphor-icons/react'
import styles from './Item.module.css'
import { ITasks } from '../../App'

interface ItemProps {
  data: ITasks
  removeTask: (id: string) => void
}

export function Item({ data, removeTask }: ItemProps) {
  function handleRemove() {
    removeTask(data.id)
  }

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
      
      <button onClick={handleRemove}>
        <Trash size={16} color='#808080' />
      </button>
    </div>
  )
}