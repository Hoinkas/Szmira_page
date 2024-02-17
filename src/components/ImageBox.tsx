import './Components.css';

const ImageBox = (props: {image: string, altText: string, overText: string, side: 'Left'|'Right'}) => {
  const {image, altText, overText, side} = props;
  const classNameAdd = side === 'Left' ? 'Flex-Left' : 'Flex-Right'
  const className = "App-imageBox ".concat(classNameAdd)
  const textClassNameAdd = side === 'Left' ? 'ImageTextFlex-Left' : 'ImageTextFlex-Right'
  const textClassName = "App-imageBoxText ".concat(textClassNameAdd)

  return (
    <div className={className}>
      <img className="App-imageBox" src={image} alt={altText}/>
      <div className={textClassName}>{overText}</div>
    </div>
  )
}

export default ImageBox;