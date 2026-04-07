import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { LayoutRouter } from './layout-router';

const MainPage = lazy(() =>
  import('@pages/index').then((page) => ({ default: page.MainPage })),
);
const FavoritesPage = lazy(() =>
  import('@pages/index').then((page) => ({ default: page.FavoritesPage })),
);

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LayoutRouter />}>
        <Route index element={<MainPage />} />
        <Route path="/my-cats" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}
