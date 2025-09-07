import Logo from '@/components/Logo';
import Login from './components/Login';
import Footer from './components/Footer';

import styles from './index.module.scss';

const LoginPage = () => {
  
  return (
    <div className={styles.container}>
      <Logo size={32}/>
      <Login />
      <Footer />
    </div>
  )
};

export default LoginPage;