import { Outlet } from 'react-router';
import { Header } from '@widgets/header';

export function LayoutRouter() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
