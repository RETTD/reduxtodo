import React, { useState } from "react"
import './input.css'
import { useDispatch } from "react-redux"
import { saveTodo } from "../features/todoSlice"

const Input = () => {
    const [inputValue, setInput] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const addTodo = () => {
        if (inputValue.length !== 0) {
            dispatch(saveTodo({
                item: inputValue,
                done: false,
                id: Date.now()
            }))
            setError(false)
            setInput('')
        } else {
            setError(true)
        }
    }

    return (
        <>
            <div className="input">
                <input type="text" value={inputValue} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTodo} >Add</button>
            </div>
            {error && <p className="error">
                Enter the name of the task
            </p>}
        </>
    )
}
export default Input