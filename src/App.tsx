import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from "@phosphor-icons/react"

import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Header as ListHeader } from './components/List/Header'
import { Item } from "./components/List/Item"
import { Empty } from './components/List/Empty'

import styles from "./App.module.css"

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

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: string, value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
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
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
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
