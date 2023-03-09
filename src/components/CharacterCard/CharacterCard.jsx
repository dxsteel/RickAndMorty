import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li key={props.character.id}>
      <Link
        to={`/character/${props.character.id}`}
      >
        <img
          src={props.character.photo}
          alt={`Pictures of ${props.character.name}`}
          title={`Pictures of ${props.character.name}`}
        />
        <h4>{props.character.name}</h4>
        <p>
          {props.character.specie}
        </p>
      </Link>
    </li>
  );
};

export default CharacterCard;