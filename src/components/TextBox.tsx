import './Components.css';

const TextBox = (props: {text: JSX.Element[]}) => {
  return (
    <div className="App-textBox">
      {props.text.map(x => x)}
    </div>
  )
}

export default TextBox;