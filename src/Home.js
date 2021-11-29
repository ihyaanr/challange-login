import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="links">
      <h1>HOMEPAGE</h1>
      <Link to="/Transactions">Go To Transactions</Link>
    </div>
  );
};

export default Home;
