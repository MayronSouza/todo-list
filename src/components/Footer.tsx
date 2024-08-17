import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.container}>
      <p>
      © {currentYear} Desafio 01 Rocketseat. Finalizado.
      </p>
    </footer>
  )
}