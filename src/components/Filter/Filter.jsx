import FilterByName from "components/FilterByName";
import './Filter.scss';

const Filter = (props) => {
  return (
    <form className="filter" onSubmit={props.handleSubmit}>
      <FilterByName
        filterByName={props.filterByName}
        errorMessage={props.errorMessage}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
    </form>
  );
};

export default Filter;