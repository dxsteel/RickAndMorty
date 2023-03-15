import { BsSearch } from 'react-icons/bs';
import './FilterByName.scss';

const FilterByName = props => {
  const handleInput = ev => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <div>
      <span className="search">
        <BsSearch />
      </span>
      <input
        className="input"
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
