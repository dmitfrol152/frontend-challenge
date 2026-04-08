import { CatsList } from '@/widgets/cats-list';
import styles from './layout-main-page.module.scss';
import type { LayoutMainPageProps } from './types';

export function LayoutMainPage({
  data,
  hasNextPage,
  isFetchingNextPage,
  onFetchNextPage,
}: LayoutMainPageProps) {
  return (
    <section className={styles.layoutMainPage}>
      <div className="container">
        <h1 className="visually-hidden">Список всех котиков</h1>
        <CatsList
          data={data}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onFetchNextPage={onFetchNextPage}
        />
      </div>
    </section>
  );
}
