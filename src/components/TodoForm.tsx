import React, {useRef, useState} from "react"
import {TodoFormProps} from "../models/model"


export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>("")
    const ref = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key.toLowerCase() === "enter") {
            onAdd(ref.current!.value)
            setTitle("")
        }
    }

   return(
       <div className="input-field mt-2">
         <input
         ref={ref}
         onKeyPress={keyPressHandler}
         type="text"
         id="title"
         placeholder="Введите название дела"
         />

         <label htmlFor="title" className="active">
             Введите название дела
         </label>
       </div>
   )
}