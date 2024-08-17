import { PlusCircle } from "@phosphor-icons/react"

import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Header as ListHeader } from './components/List/Header'

import styles from "./App.module.css"
import "./global.css"
import { Item } from "./components/List/Item"

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2"/>
          </Button>
        </div>
        <div className={styles.taskList}>
          <ListHeader />
        </div>
        <div>
          <Item />
        </div>
      </section>
    </main>
  )
}

export default App
