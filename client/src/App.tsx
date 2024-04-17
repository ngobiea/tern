import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { homePage, loginPage } from './utils/routes';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('token') ? navigate(homePage) : navigate(loginPage);
  }, [navigate]);
  return <Outlet />;
}

export default App;
