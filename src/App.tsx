import { Header } from "./components/List/Header"

import styles from "./App.module.css"
import "./global.css"
import { Input } from "./components/Input"

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
        </div>
      </section>
    </main>
  )
}

export default App
