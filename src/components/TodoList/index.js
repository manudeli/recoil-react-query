import React from 'react'
import { useFilteredListState } from '../../store/todoListState'
import TodoItem from '../TodoItem'
import TodoItemCreator from '../TodoItemCreator'
import TodoListFilters from '../TodoListFilters'
import TodoListStats from '../TodoListStats'

const TodoList = () => {
  const [todoList] = useFilteredListState()

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  )
}

export default TodoList
