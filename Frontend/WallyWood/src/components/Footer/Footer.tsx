import { FaPinterest, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';

// Footer component displaying company info and social media links
export function Footer() {
  return (
    <footer className={styles.footer}>
        <hr />
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.logo}>WALLYWOOD</h3>
          <p>Øster Uttrupvej 1</p>
          <p>9000 Aalborg</p>
        </div>

        <div className={styles.section}>
          <p>CVR: 12345678</p>
          <p>MAIL: info@plakatshoppen.dk</p>
          <p>MOBIL: +45 9812 3456</p>
        </div>

        <div className={styles.section}>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Pinterest">
              <FaPinterest />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
