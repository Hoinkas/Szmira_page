import './Components.css';

const ImageBox = (props: {image: string, altText: string, overText: string, side: 'Left'|'Right'}) => {
  const {image, altText, overText, side} = props;
  const classNameAdd = side === 'Left' ? 'Flex-Left' : 'Flex-Right'
  const className = "App-imageBox ".concat(classNameAdd)

  return (
    <div className={className}>
      <img className="App-imageBox img" src={image} alt={altText}/>
      <div className="App-imageBoxText">{overText}</div>
    </div>
  )
}

export default ImageBox;