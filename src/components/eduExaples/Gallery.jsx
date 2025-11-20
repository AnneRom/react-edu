import { getImageUrl } from './utils.js';

export default function Gallery({ name, imgId, profession, countAward, awards, discovery }) {
  return (
    <div>
      <h1>Визначні вчені</h1>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imgId)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Професія: </b> 
            {profession}
          </li>
          <li>
            <b>Нагороди: {countAward} </b> 
            {awards}
          </li>
          <li>
            <b>Відкрито: </b>
            {discovery}
          </li>
        </ul>
      </section>
    </div>
  );
}
