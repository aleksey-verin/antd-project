import { FC, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Settings'
  }
];

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => {
  useEffect(() => {
    toast('You on Settings Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <div>usersPage</div>
    </ContainerContent>
  );
};

export default SettingsPage;
