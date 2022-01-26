import "./BemobileHeader.css";
import bemobileIcon from "../../assets/images/bemobile-icon.png";

const BemobileHeader = () => {
  return (
    <div className="black-bg">
      <img className="bemobile-icon" src={bemobileIcon} alt="Icon" />
    </div>
  );
};

export default BemobileHeader;
