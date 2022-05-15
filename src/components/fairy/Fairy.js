
import { useState, useEffect } from 'react';

import './fairy.scss';

import blum from '../../resources/blum.jpeg'
import stella from '../../resources/stella.jpeg'
import flora from '../../resources/flora.jpeg'
import musa from '../../resources/musa.jpeg'
import tecna from '../../resources/tecna.jpeg'
import layla from '../../resources/layla.jpeg'

const faries =  [
  {
    id: "1",
    name: "Блум",
    description: "Магический потенциал Блум безграничен и неподражаем, потому что он унаследован от самого Великого Дракона. Огромная энергия, которой она обладает, высвобождается при трансформации. В способности Блум входят телекинез, одушевление материи, возрождение и пробуждение от гипноза.",
    image: "/static/media/blum.f5e7b416a633464a6a49.jpeg"
  },
  {
    id: "2",
    name: "Стелла",
    description: "Стелла объединяет в себе силы Солнца и Луны. Эти силы наиболее мощны в солнечные дни и при полной Луне. Сила Солнца активна и разрушительна. Сила Луны расслабляющая и пассивная. Однако, сила Солнца в магии Стеллы всё же преобладает.",
    image: "/static/media/stella.fc1acbceb2f3828bef82.jpeg"
  },
  {
    id: "3",
    name: "Флора",
    description: "Флора знает всё очарование мира природы, так как обладает цветочной магией. Когда она перевоплощается, магия вовлекает Флору в благоухающий цветочный водоворот. Она выходит из него, похожая на прекрасный цветок.",
    image: "/static/media/flora.63e88527cc65ff6c5dfd.jpeg"
  },
  {
    id: "4",
    name: "Муза",
    description: "Муза — фея музыки, и, превращаясь, она крутится на поверхности CD-диска. Волшебные силы Музы так же стремительны, как музыка Бетховена, им невозможно противостоять, как рэпу. Её основные заклинания связаны с музыкой и звуковыми волнами.",
    image: "/static/media/musa.1257205ce2a66910090b.jpeg"
  },
  {
    id: "5",
    name: "Текна",
    description: "Сила Текны основывается на технологии, она может при помощи заклинаний создавать лазерные лучи и клетки, электрические атаки и молнии. Луч лазера, ионический луч, короткое замыкание, осмотические эффекты, разница в потенциале, который создаёт молнии, клетка с электродами, чтобы защищаться от атак врагов.",
    image: "/static/media/tecna.ed69987d2525be272020.jpeg"
  },
  {
    id: "6",
    name: "Лейла",
    description: "Лейла способна управлять жидкостями и морфиксом, её особенным потоком цвета фуксии, который может принимать любую форму, какую она захочет. Лейла не в полной мере способна управлять своими силами, но она очень надеется стать такой же сильной, как и другие Винкс.",
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
    const [fairyData] = faries.filter(item => item.id === `${id}`);
    setFairy(fairyData);
  }

  console.log(blum);
  console.log(stella);
  console.log(flora);
  console.log(musa);
  console.log(tecna);
  console.log(flora);

  return (
    <div className="fairy">
      <div className="fairy__img">
        <img src={fairy.image} alt={fairy.name} />
      </div>
      <div className="fairy__wrapper">
        <div className="fairy__name">Ты {fairy.name}!</div>
        <div className="fairy__description">{fairy.description}</div>
        <button className="fairy__close" onClick={props.isClose}>Закрыть</button>
      </div>
    </div>
  )
};

export default Fairy