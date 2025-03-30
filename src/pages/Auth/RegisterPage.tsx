import Logo from '../../components/Logo';
import { Register } from '../../components/Auth';
import Footer from '../../components/Footer';

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