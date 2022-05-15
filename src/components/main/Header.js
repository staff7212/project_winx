
import './header.scss';
import logo from '../../resources/logo.png'

const Header = () => {
  return (
    <>
     <header className='header'>
        <h1 className='header__title'>Клуб волшебниц</h1>
        <img className='header__logo' src={logo} alt="winx" />
      </header>
    </>
  )
};

export default Header;