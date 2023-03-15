import { Link } from 'react-router-dom';
import './CharacterCard.scss';

const CharacterCard = props => {
  return (
    <li className="card" key={props.character.id}>
      <Link to={`/character/${props.character.id}`}>
        <img
          className="image"
          src={props.character.photo}
          alt={`Pictures of ${props.character.name}`}
          title={`Pictures of ${props.character.name}`}
        />
        <h4 className="name">{props.character.name}</h4>
        <p className="species">{props.character.specie}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
