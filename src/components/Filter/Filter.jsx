import FilterByName from "components/FilterByName";

const Filter = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        errorMessage={props.errorMessage}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
    </form>
  );
};

export default Filter;