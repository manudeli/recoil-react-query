import React, { useState } from 'react'
import { useTodoListState } from '../../store/todoListState'

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useTodoListState()

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator

// utility for creating unique Id
let id = 0
const getId = () => id++
