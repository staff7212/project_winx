
import './modal.scss';
import flora from '../../resources/flora.jpeg'

const Modal = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="fairy">
          <div className="fairy__img">
            <img src={flora} alt="" />
          </div>
          <div className="fairy__wrapper">
            <div className="fairy__name">Flora</div>
            <div className="fairy__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat facere, modi suscipit, fuga quae nobis aliquam magni reiciendis necessitatibus labore praesentium distinctio exercitationem ipsum rem animi! Modi, beatae iure?</div>
            <button className="fairy__close">Закрыть</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Modal