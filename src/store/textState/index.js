import { atom, selector, useRecoilState } from 'recoil'

const textState = atom({ key: 'textState', default: '' })

export const useTextState = () => useRecoilState(textState)

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  },
})
