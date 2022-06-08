import { Checkbox } from "@mui/material"
import React from "react"
import './todoItem.css'
import { setCheck } from '../features/todoSlice'
import { useDispatch} from 'react-redux'
interface ItemProps {
    name: string,
    done: boolean,
    id: number
}

const TodoItem = ({ name, done, id }: ItemProps) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">
            <Checkbox 
            checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }} />


            <p className={done ? 'todoItemDone' : ''}>{name}</p>
        </div>
    )
}
export default TodoItem