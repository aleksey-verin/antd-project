import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

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

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

// return (
// <div>
//   <NavLink to={ROUTES.POSTS_ROUTE}>Posts</NavLink>
//   <NavLink to={ROUTES.USERS_ROUTE}>Users</NavLink>
//   <NavLink to={ROUTES.SETTINGS_ROUTE}>Settings</NavLink>
// </div>
// );
// };

export default Navbar;
