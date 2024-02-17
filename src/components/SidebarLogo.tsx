import './Components.css';
import sidebar_logo from '../images/logo_small.svg';

// function ElementList() {
//   const elements = [];

//   for (let i = 0; i < 15; i++) {
//     elements.push(<img src={sidebar_logo} className="App-logo" alt="małe logo szmiry" key={i}/>);
//   };

//   return elements;
// }

const SidebarLogo = () => {
  // const pageHeight = document.documentElement.scrollHeight;
  // const howMuch = Math.ceil(pageHeight/98);
  // console.log(pageHeight, howMuch, 98)

  const elements = [];

  for (let i = 0; i < 29; i++) {
    elements.push(<img src={sidebar_logo} className="App-logo" alt="małe logo szmiry" key={i}/>);
  };

  return (
    <div className="Sidebar-logo">
      {elements.map(x => x)}
    </div>
  )
}

export default SidebarLogo