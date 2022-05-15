
import './main.scss';

const Main = (props) => {

  return (
    <>
      <h2 className='main__title'>Кто ты из Winx?</h2>
      <button className='main__btn' onClick={props.showModal}>Узнать</button>
    </>
  )
};

export default Main;