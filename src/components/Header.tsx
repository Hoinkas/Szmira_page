import './Components.css';
import logo from '../images/logo.svg';

const HeaderWithLogo = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo szmiry" />
    </div>
  )
}

export default HeaderWithLogo