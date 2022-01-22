import "./Header.css";
import Logo from "../../Assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img className="logo" src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
