import { Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import AppRouter from '@app/router/app-router';
import styles from './app.module.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@app/providers/queryClient ';

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div className={styles.app}>Loading...</div>}>
          <AppRouter />
        </Suspense>
      </QueryClientProvider>
      s
    </BrowserRouter>
  );
}
