import {useState, useEffect } from 'react';
import Fairy from '../fairy/Fairy';
import Spinner from '../spinner/Spinner';

import './modal.scss';

const Modal = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 900)

    return () => {
      clearTimeout(timer)
    };
  }, [])

  const closed = () => {
    setClose(true)
    setTimeout(() => {
      props.hideModal()
    }, 400)
  };

  const fairy = !isLoading ? <Fairy isClose={closed} /> : null;
  const spinner = isLoading ? <Spinner /> : null;

  return (
    <>
      <div className="overlay" onClick={closed}></div>
      <div className={`modal ${close ? 'close' : ''}`}>
        {spinner}
        {fairy}
      </div>
    </>
  )
};

export default Modal