import type { CatsProps } from '@/entities/cats/model/types';
import { useEffect, useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<CatsProps[]>(() => {
    const favoritesLocalStorage = localStorage.getItem('favorites-cats');
    return favoritesLocalStorage ? JSON.parse(favoritesLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites-cats', JSON.stringify(favorites));
  }, [favorites]);

  const isFavorites = (id: string) => favorites.some((cat) => cat.id === id);

  const toggleFavorites = (cat: CatsProps) => {
    setFavorites((prev) => {
      return isFavorites(cat.id)
        ? prev.filter((prevCat) => prevCat.id !== cat.id)
        : [...prev, cat];
    });
  };

  return { isFavorites, toggleFavorites };
}
