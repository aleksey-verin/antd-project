import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div>
      <NavLink to={ROUTES.POSTS_ROUTE}>Posts</NavLink>
      <NavLink to={ROUTES.USERS_ROUTE}>Users</NavLink>
      <NavLink to={ROUTES.SETTINGS_ROUTE}>Settings</NavLink>
    </div>
  );
};

export default Navbar;
