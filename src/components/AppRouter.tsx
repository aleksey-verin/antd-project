import { FC } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import PostPage from '../pages/PostPage';
import PostsPage from '../pages/PostsPage';
import SettingsPage from '../pages/SettingsPage';
import UsersPage from '../pages/UsersPage';
import { ROUTES } from '../routes/routes';
import Navbar from './Navbar';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route element={<PostsPage />} path={ROUTES.POSTS_ROUTE} />
        <Route element={<PostPage />} path={ROUTES.POST_SINGLE_ROUTE} />
        <Route element={<UsersPage />} path={ROUTES.USERS_ROUTE} />
        <Route element={<SettingsPage />} path={ROUTES.SETTINGS_ROUTE} />
        <Route path="*" element={<Navigate replace to={ROUTES.POSTS_ROUTE} />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
