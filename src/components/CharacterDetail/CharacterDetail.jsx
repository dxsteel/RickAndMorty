import { Link } from "react-router-dom";
import './CharacterDetail.scss'

const CharacterDetail = (props) => {
  return (
    <article>
      <Link className="detail-link" to="/">
        ⬅ GO BACK
      </Link>
      <img className="detail-image"
        src={props.character.photo}
        alt={`Pictures of ${props.character.name}`}
        title={`Pictures of ${props.character.name}`}
      />
      <div>
        <h3 className="detail-name">
          {props.character.name}
        </h3>
        <h4 className="detail-informations">
          Informations
        </h4>
        <p className="detail-properties">
        Gender
        </p>
        <p className="detail-descriptions">
        {props.character.gender}
        </p>
        <p className="detail-line"></p>
        <p className="detail-properties">
        Status 
        </p>
        <p className="detail-descriptions">
          {props.character.status}
          </p>
          <p className="detail-line"></p>
        <p className="detail-properties">
        Specie 
        </p>
        <p className="detail-descriptions">
        {props.character.specie}
        </p>
        <p className="detail-line"></p>
        <p className="detail-properties">
          Origin 
        </p>
        <p className="detail-descriptions">
        {props.character.origin}
        </p>
        <p className="detail-line"></p>
        <p className="detail-properties">
          Type 
        </p>
        <p className="detail-descriptions">
        {props.character.type}
        </p>
        <p className="detail-line"></p>
      </div>
    </article>
  );
};

export default CharacterDetail;