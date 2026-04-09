import type { CatsProps } from '@/entities/cats/model/types';
import { CatCard } from '@/entities/cats/ui/cat-card/cat-card';
import styles from './cats-list.module.scss';
import { ToggleFavorites } from '@/features/toggle-favorites/ui/toggle-favorites';
import { useInView } from '@/shared/lib/hooks/use-in-view';
import { useEffect, useRef, useMemo } from 'react';
import type { CatsListProps } from './types';

export function CatsList({
  data,
  hasNextPage,
  isFetchingNextPage,
  onFetchNextPage,
}: CatsListProps) {
  const { isView, ref } = useInView(0.5);
  const wasInViewRef = useRef(false);

  const allCats = useMemo(() => data.flat() || [], [data]);

  useEffect(() => {
    const wasInView = wasInViewRef.current;
    wasInViewRef.current = isView;

    if (
      !wasInView &&
      isView &&
      hasNextPage &&
      !isFetchingNextPage &&
      onFetchNextPage
    ) {
      onFetchNextPage();
    }
  }, [onFetchNextPage, hasNextPage, isFetchingNextPage, isView]);

  if (!allCats.length) {
    return (
      <div className={styles.catList}>
        <span className={styles.catList__text}>Пусто</span>
      </div>
    );
  }

  return (
    <div className={styles.catList__wrapper}>
      <ul className={styles.catList__list}>
        {allCats.map((cat: CatsProps) => {
          return (
            <li key={cat.id}>
              <CatCard cat={cat} ToggleFavorites={ToggleFavorites} />
            </li>
          );
        })}
      </ul>
      <div ref={ref} className={styles.catList__observer}>
        {isFetchingNextPage && (
          <span className={styles.catList__loading}>
            ... загружаем еще котиков ...
          </span>
        )}
      </div>
    </div>
  );
}
