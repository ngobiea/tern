import { loginPage } from '../utils/routes';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={loginPage}>Login</Link>
    </div>
  );
};

export default HomePage;
