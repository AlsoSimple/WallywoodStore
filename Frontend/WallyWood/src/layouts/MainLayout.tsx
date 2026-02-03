import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer/Footer';
import styles from './MainLayout.module.scss';

// Main layout wrapper providing consistent header/footer across all pages
export function MainLayout() {
  // Define navigation links that will appear in the header
  const links = [
    { to: '/', label: 'HOME' },
    { to: '/plakater', label: 'PLAKATER' },
    { to: '/om-os', label: 'OM OS' },
    { to: '/kontakt', label: 'KONTAKT' },
    { to: '/login', label: 'LOGIN' },
  ];

  return (
    <div className={styles.wrapper}>
      <Navigation logoText="WALLYWOOD" navLinks={links} />
      {/* Outlet renders the current route's component */}
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}