import React, { useState } from 'react';
import styles from './cat-card.module.scss';
import type { CatCardProps } from './types';
import clsx from 'clsx';

export const CatCard = React.memo(({ cat, ToggleFavorites }: CatCardProps) => {
  const [statusLoadImg, setStatusLoadImg] = useState<
    'loading' | 'error' | 'success'
  >('loading');

  const { url, height, width } = cat;

  const coverImg =
    height > width ? styles['cat__img--height'] : styles['cat__img--weight'];

  return (
    <article className={styles.cat}>
      {statusLoadImg === 'loading' && (
        <span className={styles.cat__text}>Загрузка..</span>
      )}
      {statusLoadImg === 'error' && (
        <span className={styles.cat__text}>Ошибка загрузки</span>
      )}
      <img
        className={clsx(styles.cat__img, coverImg)}
        src={url}
        alt="Изображение котика"
        width={width}
        height={height}
        loading="lazy"
        onError={() => setStatusLoadImg('error')}
        onLoad={() => setStatusLoadImg('success')}
        style={{ opacity: statusLoadImg === 'success' ? '1' : '0' }}
      />
      {ToggleFavorites && (
        <div className={styles.cat__btn}>
          <ToggleFavorites cat={cat} />
        </div>
      )}
    </article>
  );
});
