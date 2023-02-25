import React from "react"
import {TodoListProps} from "../models/model"

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleHandler, removeHandler }) => {

    if (todos.length === 0) {
        return <p className="center">Пока дел нет!</p>
    }

    const removeTodoHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        removeHandler(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ["todo"]
                if (todo.completed) {
                    classes.push("completed")
                }

                return(
                    <li className={classes.join(" ")} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={toggleHandler.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                onClick={(event) => removeTodoHandler(event, todo.id)}
                                className="material-icons red-text">
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}