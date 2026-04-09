import { ButtonUi } from '@/shared/ui/button-ui';
import IconFavoriteNone from '@shared/assets/image/svg/icon-favorite-none.svg?react';
import IconFavoriteFill from '@shared/assets/image/svg/icon-favorite-fill.svg?react';
import styles from './toggle-favorites.module.scss';
import type { CatsProps } from '@/entities/cats/model/types';
import { useFavorites } from '../model/hooks/use-favorites';
import React from 'react';

export const ToggleFavorites = React.memo(({ cat }: { cat: CatsProps }) => {
  const { isFavorites, toggleFavorite } = useFavorites();

  const handleToggleFavorites = () => {
    toggleFavorite(cat);
  };

  return (
    <ButtonUi
      className={styles.toggleFavorites}
      type="button"
      size="s"
      onClick={handleToggleFavorites}
      aria-label="Добавить в избранное"
    >
      {isFavorites(cat.id) ? (
        <IconFavoriteFill />
      ) : (
        <>
          <IconFavoriteFill className={styles.toggleFavorites__fill} />
          <IconFavoriteNone className={styles.toggleFavorites__none} />
        </>
      )}
    </ButtonUi>
  );
});
