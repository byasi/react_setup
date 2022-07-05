import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';


const MainLayout = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated) {
        navigate('/login');
      }

    }
    checkAuth();
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default MainLayout;