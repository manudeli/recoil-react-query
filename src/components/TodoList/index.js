import React from 'react'
import { useFilteredListState } from '../../store/todoListState'
import TodoItem from '../TodoItem'
import TodoItemCreator from '../TodoItemCreator'
import TodoListFilters from '../TodoListFilters'

const TodoList = () => {
  const [todoList] = useFilteredListState()

  return (
    <>
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  )
}

export default TodoList
