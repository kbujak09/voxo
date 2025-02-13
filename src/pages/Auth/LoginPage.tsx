import Logo from '../../components/Logo/index';
import { Login } from '../../components/Auth/index';
import Footer from '../../components/Footer/index';

import styles from './authPages.module.scss';

const LoginPage = () => {
  
  return (
    <div className={styles.container}>
      <Logo size={36}/>
      <Login />
      <Footer />
    </div>
  )
};

export default LoginPage;