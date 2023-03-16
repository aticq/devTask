import global from 'assets/images/Header/global.png';
import styles from './Header.module.css';

interface HeaderType {
    goHomeButton?: () => void
}

const Header = ({ goHomeButton }:HeaderType) => (
    <div className={styles.header}>
        <img className={styles.home_icon} src={global} alt="Home" onClick={goHomeButton} />
    </div>
);

export default Header;
