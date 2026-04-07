import { NavLink } from 'react-router';
import styles from './navbar-ui.module.scss';
import clsx from 'clsx';

export function NavbarUi() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(
                styles.navbar__link,
                styles['navbar__link--all-cats'],
                isActive && styles['navbar__link--active'],
              )
            }
            to="/"
          >
            Все котики
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(
                styles.navbar__link,
                styles['navbar__link--my-cats'],
                isActive && styles['navbar__link--active'],
              )
            }
            to="/my-cats"
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
