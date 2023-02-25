import React, {useState, useEffect} from "react"
import {TodoForm} from "../components/TodoForm"
import {TodoList} from "../components/TodoList"
import {ITodo} from "../models/model"

declare var confirm: (question: string) => boolean

export const Home = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]

      setTodos(saved)
    }, [])

    useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
       const newTodo = {
          title,
          id: Date.now(),
          completed: false
       }

       setTodos([newTodo, ...todos])
    }

    const toggleHandler = (id: number) => {
       setTodos(prev => prev.map(todo => {
           if (todo.id === id) {
               todo.completed = !todo.completed
           }
           return todo
       }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm("Вы уверены что хотите удалить элемент?")

        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return(
        <div className="container">
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                toggleHandler={toggleHandler}
                removeHandler={removeHandler}
            />
        </div>
    )
}