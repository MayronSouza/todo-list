import { Header } from "./components/Header"
import { Search } from "./components/Search"

import styles from "./App.module.css"
import "./global.css"
import { Content } from "./components/Content"

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Search />
        <Content />
      </main>
    </>
  )
}

export default App
