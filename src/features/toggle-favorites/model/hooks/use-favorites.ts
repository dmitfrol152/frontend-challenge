import { useFavoritesStore } from '@/entities/cats/model/hooks/use-favorites-store';

export function useFavorites() {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);

  const isFavorites = (id: string) =>
    favorites.some((favorite) => favorite.id === id);

  return { isFavorites, toggleFavorite, favorites };
}
