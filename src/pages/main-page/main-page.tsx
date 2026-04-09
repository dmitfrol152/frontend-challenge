import { ButtonUi } from '@/shared/ui/button-ui';
import styles from './main-page.module.scss';
import { useFetchCats } from '@/entities/cats/model/hooks/use-fetch-cats';
import { LayoutMainPage } from './ui/layout-main-page';
import { useCallback } from 'react';

export function MainPage() {
  const {
    isError: isErrorMainPage,
    isLoading: isLoadingHomePage,
    isSuccess: isSuccessHomePage,
    data: dataHomePage,
    refetch: refetchHomePage,
    hasNextPage: hasNextPageHomePage,
    isFetchingNextPage: isFetchingNextPageHomePage,
    fetchNextPage: fetchNextPageHomePage,
  } = useFetchCats();

  const handleRefetch = () => {
    refetchHomePage();
  };

  const handleFetchNextPage = useCallback(() => {
    fetchNextPageHomePage();
  }, [fetchNextPageHomePage]);

  if (isErrorMainPage) {
    return (
      <div className={styles.mainPage}>
        <div className={styles.mainPage__error}>
          <span className={styles.mainPage__text}>
            Ошибка получения данных. Пожалуйста, повторите попытку.
          </span>
          <ButtonUi
            type="button"
            size="m"
            variant="main"
            onClick={handleRefetch}
          >
            Обновить
          </ButtonUi>
        </div>
      </div>
    );
  }

  if (isLoadingHomePage) {
    return (
      <div className={styles.mainPage}>
        <span className={styles.mainPage__text}>Загрузка..</span>
      </div>
    );
  }

  if (isSuccessHomePage && dataHomePage) {
    return (
      <LayoutMainPage
        data={dataHomePage.pages}
        hasNextPage={hasNextPageHomePage}
        isFetchingNextPage={isFetchingNextPageHomePage}
        onFetchNextPage={handleFetchNextPage}
      />
    );
  }

  if (isSuccessHomePage && !dataHomePage) {
    return (
      <div className={styles.mainPage}>
        <span className={styles.mainPage__text}>Пусто</span>
      </div>
    );
  }

  return (
    <div className={styles.mainPage}>
      <span className={styles.mainPage__text}>Что-то пошло не так..</span>
    </div>
  );
}
