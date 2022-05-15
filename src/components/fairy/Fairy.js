
import { useState, useEffect } from 'react';

import './fairy.scss';

import layla from '../../resources/layla.jpeg'

const faries =  [
  {
    id: "1",
    name: "Блум",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat facere, modi suscipit, fuga quae nobis aliquam magni reiciendis necessitatibus labore praesentium distinctio exercitationem ipsum rem animi! Modi, beatae iure?",
    image: "/static/media/blum.f5e7b416a633464a6a49.jpeg"
  },
  {
    id: "2",
    name: "Стелла",
    description: "Второй",
    image: "/static/media/stella.fc1acbceb2f3828bef82.jpeg"
  },
  {
    id: "3",
    name: "Флора",
    description: "Третий",
    image: "/static/media/flora.63e88527cc65ff6c5dfd.jpeg"
  },
  {
    id: "4",
    name: "Муза",
    description: "Третий",
    image: "/static/media/musa.1257205ce2a66910090b.jpeg"
  },
  {
    id: "5",
    name: "Текна",
    description: "Третий",
    image: "/static/media/tecna.ed69987d2525be272020.jpeg"
  },
  {
    id: "6",
    name: "Лейла",
    description: "Третий",
    image: "/static/media/layla.7b956f3198b9961cfdc6.jpeg"
  },
]

const Fairy = (props) => {

  const [fairy, setFairy] = useState({});

  useEffect(() => {
    updateFairy();
  }, []);

  const updateFairy = () => {
    const id = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(id);
    const [fairyData] = faries.filter(item => item.id === `6`);
    setFairy(fairyData);
  }

  return (
    <div className="fairy">
      <div className="fairy__img">
        <img src={fairy.image} alt="" />
      </div>
      <div className="fairy__wrapper">
        <div className="fairy__name">{fairy.name}</div>
        <div className="fairy__description">{fairy.description}</div>
        <button className="fairy__close" onClick={props.isClose}>Закрыть</button>
      </div>
    </div>
  )
};

export default Fairy