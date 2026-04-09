import { create } from 'zustand';
import type { CatsFavoritesStoreProps, CatsProps } from '../types';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create<CatsFavoritesStoreProps>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (cat: CatsProps) => {
        const { favorites } = get();

        const isFavorites = favorites.some(
          (currentCat) => currentCat.id === cat.id,
        );

        if (isFavorites) {
          set({
            favorites: favorites.filter(
              (currentCat) => currentCat.id !== cat.id,
            ),
          });
        } else {
          set({ favorites: [...favorites, cat] });
        }
      },
    }),
    { name: 'favorites-cats' },
  ),
);
