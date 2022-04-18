import { useTextState } from '../../store/textState'

function TextInput() {
  const [text, setText] = useTextState()

  const onChange = ({ target: { value } }) => setText(value)

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

export default TextInput
