import logo from 'assets/images/Footer/Logo.png';
import styles from './Footer.module.css';

const Footer = () => (
    <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Лого" />
    </div>
);

export default Footer;
