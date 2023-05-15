import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import { getPosts } from './store/reducers/postsSlice';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ROUTES } from './routes/routes';
import UsersPage from './pages/UsersPage';
import SettingsPage from './pages/SettingsPage';
import PostsPage from './pages/PostsPage';
import { getUsers } from './store/reducers/usersSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<PostsPage />} path={ROUTES.POSTS_ROUTE} />
          <Route element={<UsersPage />} path={ROUTES.USERS_ROUTE} />
          <Route element={<SettingsPage />} path={ROUTES.SETTINGS_ROUTE} />
          <Route path="*" element={<Navigate replace to={ROUTES.POSTS_ROUTE} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
