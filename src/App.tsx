import { Header } from "./components/Header"
import { Search } from "./components/Search"

import styles from "./App.module.css"
import "./global.css"

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Search />
      </main>
    </>
  )
}

export default App
