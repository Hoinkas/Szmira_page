import './App.css';

import HeaderWithLogo from './components/Header';
import TextBox from './components/TextBox';
import SidebarLogo from './components/SidebarLogo';
import ImageBox from './components/ImageBox';

import {text1, text2, text3, text4} from './texts/texts'
import { description1, description2, description3 } from './texts/imagesDescritions';

import zdj_Strona_1 from './images/zdj_Strona_1.png'
import zdj_Strona_2 from './images/zdj_Strona_2.png'
import zdj_Strona_3 from './images/zdj_Strona_3.png'

function App() {
  return (
    <div className="App">
      <div className="App-box">
        <HeaderWithLogo/>
        <TextBox text={text1}/>
        <ImageBox image={zdj_Strona_1} altText={description1} overText={"Kim jesteśmy?"} side='Right'/>
        <TextBox text={text2}/>
        <ImageBox image={zdj_Strona_2} altText={description2} overText={"Co robimy?"} side='Left'/>
        <TextBox text={text3}/>
        <ImageBox image={zdj_Strona_3} altText={description3} overText={"Gdzie jesteśmy?"} side='Right'/>
        <TextBox text={text4}/>

        <div>Copyright 2024 - Spółdzielnia Szmira</div>
        {/* <div>Strona spełnia wymogi WCAG2</div> */}
        <SidebarLogo/>
      </div>
    </div>
  );
}

export default App;
