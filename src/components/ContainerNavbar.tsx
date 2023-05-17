import { MenuProps, Menu } from 'antd';
import { UserOutlined, MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { FC } from 'react';
import { NavLink, useLocation, useNavigation } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { extractPath } from '../utils/helpers';

interface ContainerNavbarProps {}

const items: MenuProps['items'] = [
  {
    label: <NavLink to={ROUTES.HOME_ROUTE}>Home</NavLink>,
    key: ROUTES.HOME_ROUTE,
    icon: <HomeOutlined />
  },
  {
    label: <NavLink to={ROUTES.POSTS_ROUTE}>Posts</NavLink>,
    key: ROUTES.POSTS_ROUTE,
    icon: <MailOutlined />
  },
  {
    label: <NavLink to={ROUTES.USERS_ROUTE}>Users</NavLink>,
    key: ROUTES.USERS_ROUTE,
    icon: <UserOutlined />
  },
  {
    label: <NavLink to={ROUTES.SETTINGS_ROUTE}>Settings</NavLink>,
    key: ROUTES.SETTINGS_ROUTE,
    icon: <SettingOutlined />
  }
];

const ContainerNavbar: FC<ContainerNavbarProps> = () => {
  const { pathname } = useLocation();
  const currentPath = extractPath(pathname);

  return (
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
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={items}
        selectedKeys={[currentPath]}
      />
    </Header>
  );
};

export default ContainerNavbar;
