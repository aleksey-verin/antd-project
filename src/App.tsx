import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import { getPosts } from './store/reducers/postsSlice';
import { getUsers } from './store/reducers/usersSlice';
import { toast } from 'react-hot-toast';
import { ConfigProvider, Layout, theme } from 'antd';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import SettingsPage from './pages/SettingsPage';
import UsersPage from './pages/UsersPage';
import ContainerNavbar from './components/ContainerNavbar';
import ContainerFooter from './components/ContainerFooter';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { useSelector } from 'react-redux';
import { selectorThemeSlice } from './store/reducers/themeSlice';

function App() {
  const dispatch = useAppDispatch();

  const { isThemeLight } = useSelector(selectorThemeSlice);

  const userTheme = {
    algorithm: isThemeLight ? theme.defaultAlgorithm : theme.darkAlgorithm
  };

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    toast.success('Welcome!');
  }, [dispatch]);

  return (
    <HashRouter>
      <ConfigProvider theme={userTheme}>
        <Layout style={{ minHeight: '100%' }}>
          <ContainerNavbar />
          <Routes>
            <Route element={<HomePage />} path={ROUTES.HOME_ROUTE} />
            <Route element={<PostsPage />} path={ROUTES.POSTS_ROUTE} />
            <Route element={<PostPage />} path={ROUTES.POST_SINGLE_ROUTE} />
            <Route element={<UsersPage />} path={ROUTES.USERS_ROUTE} />
            <Route element={<UserPage />} path={ROUTES.USER_SINGLE_ROUTE} />
            <Route element={<SettingsPage />} path={ROUTES.SETTINGS_ROUTE} />
            <Route path="*" element={<Navigate replace to={ROUTES.HOME_ROUTE} />} />
          </Routes>
          <ContainerFooter />
        </Layout>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
