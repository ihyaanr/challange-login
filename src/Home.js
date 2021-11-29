import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="links">
      <h1>HOMEPAGE</h1>
      <Link to="/transactions">Go To Transactions</Link>
      <br />git 
      <Link to="/Book">Go To Book</Link>
    </div>
  );
};

export default Home;
