import Logo from '@/components/Logo';
import Register from './components/Register';
import Footer from './components/Footer';

import styles from './index.module.scss';

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