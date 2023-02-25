
export interface TodoFormProps {
   onAdd(title: string): void
}

export interface ITodo {
   title: string
   id: number
   completed: boolean
}

export type TodoListProps = {
   todos: ITodo[]
   toggleHandler(id: number): void
   removeHandler(id: number): void
}



