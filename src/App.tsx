import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import { getPosts } from './store/reducers/postsSlice';
import { getUsers } from './store/reducers/usersSlice';
import { toast } from 'react-hot-toast';
import AppRouter from './components/AppRouter';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import {
  HashRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useNavigation,
  useParams
} from 'react-router-dom';
import { ROUTES } from './routes/routes';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import SettingsPage from './pages/SettingsPage';
import UsersPage from './pages/UsersPage';
import ContainerContent from './components/ContainerContent';
import ContainerNavbar from './components/ContainerNavbar';
import ContainerFooter from './components/ContainerFooter';
import HomePage from './pages/HomePage';

// const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
    toast.success('Welcome!');
  }, [dispatch]);

  return (
    <HashRouter>
      <Layout>
        <ContainerNavbar />
        <Routes>
          <Route element={<HomePage />} path={ROUTES.HOME_ROUTE} />
          <Route element={<PostsPage />} path={ROUTES.POSTS_ROUTE} />
          <Route element={<PostPage />} path={ROUTES.POST_SINGLE_ROUTE} />
          <Route element={<UsersPage />} path={ROUTES.USERS_ROUTE} />
          <Route element={<SettingsPage />} path={ROUTES.SETTINGS_ROUTE} />
          <Route path="*" element={<Navigate replace to={ROUTES.HOME_ROUTE} />} />
        </Routes>
        <ContainerFooter />
      </Layout>
    </HashRouter>
  );
}

export default App;
