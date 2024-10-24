import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container flex">
        <div className="footer-text">
          <p className="copyright">Copyright &copy; 2024 Ömer Akçınar</p>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <img src="assets/logo.png" alt="feierdex logo"></img>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
