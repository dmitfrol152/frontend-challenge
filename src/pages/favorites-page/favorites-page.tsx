import { useFavorites } from '@/features/toggle-favorites/model/hooks/use-favorites';
import styles from './favorites-page.module.scss';
import { LayoutFavoritesPage } from './ui/layout-favorites-page';

export function FavoritesPage() {
  const { favorites } = useFavorites();

  if (!favorites || favorites.length === 0) {
    return (
      <div className={styles.favoritesPage}>
        <span className={styles.favoritesPage__text}>Пусто</span>
      </div>
    );
  }

  return <LayoutFavoritesPage data={favorites} />;
}
