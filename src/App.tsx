import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from "@phosphor-icons/react"

import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Header as ListHeader } from './components/List/Header'

import styles from "./App.module.css"
import { Item } from "./components/List/Item"
import { useState } from "react"
import { Empty } from './components/List/Empty'

export interface ITasks {
  id: string,
  text: string,
  isChecked: boolean,
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((preValue, currentValue) => {
    if (currentValue.isChecked) {
      return preValue + 1
    }

    return preValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITasks = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2"/>
          </Button>
        </div>
        <div className={styles.taskList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
        </div>
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
              <Item
                key={task.id}
                data={task}
              />
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </main>
  )
}

export default App
