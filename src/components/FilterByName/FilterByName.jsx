const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        onInput={handleInput}
        value={props.filterByName}
      />
      <p>{props.errorMessage}</p>
    </div>
  );
};

export default FilterByName;