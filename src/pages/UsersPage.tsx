import { FC, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface UsersPageProps {}

const UsersPage: FC<UsersPageProps> = () => {
  useEffect(() => {
    toast('You on Users Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  return <div>usersPage</div>;
};

export default UsersPage;
