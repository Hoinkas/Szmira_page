import './App.css';
import HeaderWithLogo from './components/Header';
import TextBox from './components/TextBox';
import {text1, text2, text3, text4} from './texts/texts'
import { description1, description2, description3 } from './texts/imagesDescritions';
import kratka from './images/kratka.svg'
import SidebarLogo from './components/SidebarLogo';
import ImageBox from './components/ImageBox';
import drukarka from './images/drukarka.svg'
import lokal from './images/lokal.svg'

function App() {
  return (
    <div className="App">
      <div className="App-box">
        <HeaderWithLogo/>
        <TextBox text={text1}/>
        <ImageBox image={kratka} altText={description1} overText={"Kim jesteśmy?"} side='Right'/>
        <TextBox text={text2}/>
        <ImageBox image={drukarka} altText={description2} overText={"Co robimy?"} side='Left'/>
        <TextBox text={text3}/>
        <ImageBox image={lokal} altText={description3} overText={"Gdzie jesteśmy?"} side='Right'/>
        <TextBox text={text4}/>

        <div>Copyright 2024 - Spółdzielnia Szmira</div>
        <div>Strona spełnia wymogi WCAG2</div>
        <SidebarLogo/>
      </div>
    </div>
  );
}

export default App;
