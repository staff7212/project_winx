import { useState } from 'react';

import Header from './components/main/Header';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import './style.scss';


function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModalHandler = () => {
    setIsShowModal(true);
  }

  const hideModalHandler = () => {
    setIsShowModal(false);
  }

  return (
    <>
      <Header />
      <div className="app">
        <Main showModal={showModalHandler}/>
        {isShowModal &&  <Modal isClose={isShowModal} hideModal={hideModalHandler} />}
      </div>
    </>
  );
}

export default App;
