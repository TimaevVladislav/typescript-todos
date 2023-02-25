import React, {useState} from "react"
import {TodoForm} from "../components/TodoForm"
import {TodoList} from "../components/TodoList"
import {ITodo} from "../models/model"

export const Home = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

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
        const shouldRemove = window.confirm("Вы уверены что хотите удалить элемент?")

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