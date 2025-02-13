import Logo from '../../components/Logo/index';
import { Register } from '../../components/Auth/index';
import Footer from '../../components/Footer/index';

import styles from './authPages.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <Logo  size={36}/>
      <Register />
      <Footer />
    </div>
  )
};

export default RegisterPage;