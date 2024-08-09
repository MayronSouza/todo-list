import Logo from '../assets/logo.png'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={Logo} />
      </div>
    </header>
  )
}