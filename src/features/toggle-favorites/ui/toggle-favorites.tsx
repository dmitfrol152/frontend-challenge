import { ButtonUi } from '@/shared/ui/button-ui';
import IconFavoriteNone from '@shared/assets/image/svg/icon-favorite-none.svg?react';
import IconFavoriteFill from '@shared/assets/image/svg/icon-favorite-fill.svg?react';
import styles from './toggle-favorites.module.scss';
import type { CatsProps } from '@/entities/cats/model/types';
import { useFavorites } from '../model/hooks/use-favorites';

export function ToggleFavorites({ cat }: { cat: CatsProps }) {
  const { toggleFavorites, isFavorites } = useFavorites();

  const handleToggleFavorites = () => {
    toggleFavorites(cat);
  };

  const haveFavorites = isFavorites(cat.id);

  return (
    <ButtonUi
      className={styles.toggleFavorites}
      type="button"
      size="s"
      onClick={handleToggleFavorites}
      aria-label="Добавить в избранное"
    >
      {haveFavorites ? (
        <IconFavoriteFill />
      ) : (
        <>
          <IconFavoriteFill className={styles.toggleFavorites__fill} />
          <IconFavoriteNone className={styles.toggleFavorites__none} />
        </>
      )}
    </ButtonUi>
  );
}
