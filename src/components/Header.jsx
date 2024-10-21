import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo-text">
        <Link to="/">
          <h1>FeierDex</h1>
        </Link>
        <p>Ihr Feier-Index für Deutschland!</p>
      </div>
    </header>
  );
};

export default Header;
