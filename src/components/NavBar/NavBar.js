import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo/>
      <Menu/>
      <CartWidget/>
    </div>
  )
}

export default NavBar
