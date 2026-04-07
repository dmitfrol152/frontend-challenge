import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCats } from '@entities/cats/api/fetchCats';

export function useFetchCats() {
  const queryFetchCats = useInfiniteQuery({
    queryKey: ['cats'],
    queryFn: ({ pageParam }) => fetchCats(pageParam),
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    getPreviousPageParam: (firstPage) => {

    },
    getNextPageParam: (lastPage) => {

  });
}
