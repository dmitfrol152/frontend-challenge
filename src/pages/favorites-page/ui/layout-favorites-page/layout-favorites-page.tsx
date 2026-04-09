import { CatsList } from '@/widgets/cats-list';
import styles from './layout-favorites-page.module.scss';
import type { LayoutFavoritesPageProps } from './types';

export function LayoutFavoritesPage({ data }: LayoutFavoritesPageProps) {
  return (
    <section className={styles.layoutFavoritesPage}>
      <div className="container">
        <h1 className="visually-hidden">Список избранных котиков</h1>
        <CatsList data={[data]} />
      </div>
    </section>
  );
}
