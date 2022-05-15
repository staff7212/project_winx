
import './main.scss';
import logo from '../../resources/logo.png'

const Main = () => {

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Клуб волшебниц</h1>
        <img className='header__logo' src={logo} alt="winx" />
      </header>

      <h2 className='main__title'>Кто ты из Winx?</h2>
      <button className='main__btn'>Узнать</button>

    </>
  )
};

export default Main;