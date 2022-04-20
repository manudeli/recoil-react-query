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

export const useTodoListState = () => useRecoilState(todoListState)
export const useFilteredListState = () => useRecoilState(filteredTodoListState)
export const useFilteredListValue = () => useRecoilValue(filteredTodoListState)
export const useFilterState = () => useRecoilState(todoListFilterState)
