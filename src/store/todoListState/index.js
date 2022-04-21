import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const todoListFilterState = atom({
  key: 'todoListFilter',
  default: 'Show All',
})

const todoListState = atom({
  key: 'todoList',
  default: [],
})

const filteredTodoListState = selector({
  key: 'filteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show All': {
        return list
      }
      case 'Show Completed': {
        return list.filter(({ isCompleted }) => isCompleted)
      }
      case 'Show Uncompleted': {
        return list.filter(({ isCompleted }) => !isCompleted)
      }
      default: {
        return list
      }
    }
  },
})

const todoListStatsState = selector({
  key: 'TodoListStats',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

export const useTodoListState = () => useRecoilState(todoListState)
export const useFilteredListState = () => useRecoilState(filteredTodoListState)
export const useFilterState = () => useRecoilState(todoListFilterState)

export const useFilteredListValue = () => useRecoilValue(filteredTodoListState)
export const useTodoListStatsValue = () => useRecoilValue(todoListStatsState)
