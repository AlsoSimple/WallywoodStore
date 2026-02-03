import { NavLink, Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import styles from './Navigation.module.scss';

// Structure for each navigation link with route path and display text
interface NavLink {
  to: string;
  label: string;
}

// Component accepts optional logo text and required array of navigation links
interface NavigationProps {
  logoText?: string;
  navLinks: NavLink[];
}

export const Navigation = (props: NavigationProps) => {
  const { logoText = 'WALLYWOOD', navLinks } = props;
  console.log('Navigation navLinks:', navLinks);

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        
        {/* Clickable logo that returns user to homepage */}
        <Link to="/" className={styles.logo}>
          {logoText}
        </Link>
        
        <div className={styles.navContainer}>

          {/* Cart icon that navigates to shopping cart page */}
          <Link to="/cart" className={styles.cart}>
            <BsCart3 />
          </Link>

          {/* Map through navLinks array to render navigation items, applying active class to current page */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink 
                  to={link.to}
                  className={({ isActive }) => isActive ? styles.active : ''}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </nav>
  );
};