import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/redux';
import { getPosts } from './store/reducers/postsSlice';
import { getUsers } from './store/reducers/usersSlice';
import { toast } from 'react-hot-toast';
import AppRouter from './components/AppRouter';
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import SettingsPage from './pages/SettingsPage';
import UsersPage from './pages/UsersPage';
import ContainerContent from './components/ContainerContent';

const { Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: <NavLink to={ROUTES.POSTS_ROUTE}>Posts</NavLink>,
    key: 'posts',
    icon: <MailOutlined />
  },
  {
    label: <NavLink to={ROUTES.USERS_ROUTE}>Users</NavLink>,
    key: 'users',
    icon: <UserOutlined />
  },
  {
    label: <NavLink to={ROUTES.SETTINGS_ROUTE}>Settings</NavLink>,
    key: 'settings',
    icon: <SettingOutlined />
  }
];

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
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
        </Header>
        <ContainerContent>
          <Routes>
            <Route element={<PostsPage />} path={ROUTES.POSTS_ROUTE} />
            <Route element={<PostPage />} path={ROUTES.POST_SINGLE_ROUTE} />
            <Route element={<UsersPage />} path={ROUTES.USERS_ROUTE} />
            <Route element={<SettingsPage />} path={ROUTES.SETTINGS_ROUTE} />
            <Route path="*" element={<Navigate replace to={ROUTES.POSTS_ROUTE} />} />
          </Routes>
        </ContainerContent>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </HashRouter>
  );
}

export default App;
