import { FC, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface SettingsPageProps {}

const SettingsPage: FC<SettingsPageProps> = () => {
  useEffect(() => {
    toast('You on Settings Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  return <div>SettingsPage</div>;
};

export default SettingsPage;
