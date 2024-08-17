/* eslint-disable no-constant-condition */
import styles from './Task.module.css'

import Trash from '../assets/trash.png'

export function Task() {
  return (
    <div className={styles.task}>
      {   
        1 !== 1
        ? (<></>)
        : (<input type="checkbox" id='1' />)
      }
      <label htmlFor="1">
      Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </label>
      <img src={Trash} alt="trash" />
    </div>
  )
}