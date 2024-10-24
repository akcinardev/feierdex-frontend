import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="assets/logo.png" alt="feierdex logo"></img>
      </Link>
    </header>
  );
};

export default Header;
