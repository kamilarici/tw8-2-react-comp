import img from "../img/Clarusway.png";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <img src={img} alt="" />
      </nav>
      <h1>lesson reminder</h1>
    </div>
  );
};

export default Header;
