import './Header.scss';
import title from '../../img/RM.png';

const Header = () => {
  return (
    <div className="header">
      <img src={title} alt="Title" />;
    </div>
  );
};

export default Header;
