import { Link } from 'react-router-dom';
import { loginPage } from '../../utils/routes';
const SignupPage = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <Link to={loginPage}>Login</Link>
    </div>
  );
};

export default SignupPage;
