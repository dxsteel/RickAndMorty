import CharacterCard from "components/CharacterCard";

const CharacterList = (props) => {
  props.characters.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  const characterElement = props.characters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });

  return (
    <section>
      <ul>{characterElement}</ul>
    </section>
  );
};

export default CharacterList;