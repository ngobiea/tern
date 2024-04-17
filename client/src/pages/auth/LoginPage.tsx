import { Link } from 'react-router-dom';
import { signupPage, homePage } from '../../utils/routes';
const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>

      <Link to={signupPage}>Signup</Link>
      <Link to={homePage}>Home</Link>
    </div>
  );
};

export default LoginPage;
