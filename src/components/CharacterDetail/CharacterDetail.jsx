import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <article>
      <Link to="/">
        ⬅ Go back
      </Link>
      <img
        src={props.character.photo}
        alt={`Pictures of ${props.character.name}`}
        title={`Pictures of ${props.character.name}`}
      />
      <div>
        <h3>
          {props.character.name}
        </h3>
        <h4>
          Informations
        </h4>
        <p>
        Gender: {props.character.gender}
        </p>
        <p>
        Status: {props.character.status}
        </p>
        <p>
        Specie: {props.character.specie}
        </p>
        <p>
          Origin: {props.character.origin}
        </p>
        <p>
          Type: {props.character.type}
        </p>
      </div>
    </article>
  );
};

export default CharacterDetail;