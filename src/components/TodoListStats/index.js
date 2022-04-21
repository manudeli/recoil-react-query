import React from 'react'
import { useTodoListStatsValue } from '../../store/todoListState'

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useTodoListStatsValue()

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

export default TodoListStats
