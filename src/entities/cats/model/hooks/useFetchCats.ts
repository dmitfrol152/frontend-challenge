import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCats } from '@entities/cats/api/fetchCats';

export function useFetchCats() {
  const {
    isError,
    isLoading,
    isSuccess,
    data,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['cats'],
    queryFn: ({ pageParam }) => fetchCats(pageParam),
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length : undefined;
    },
  });

  return {
    isError,
    isLoading,
    isSuccess,
    data,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
}
