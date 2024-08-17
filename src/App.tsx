import { Header } from "./components/List/Header"

import styles from "./App.module.css"
import "./global.css"

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          
        </div>
      </section>
    </main>
  )
}

export default App
