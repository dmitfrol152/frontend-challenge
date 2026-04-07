import { NavbarUi } from '@/shared/ui/navbar-ui';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavbarUi />
      </div>
    </header>
  );
}
