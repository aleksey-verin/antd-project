import { FC, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';
import { Descriptions, Switch } from 'antd';
import { selectorThemeSlice, setThemeDark, setThemeLight } from '../store/reducers/themeSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/redux';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Settings'
  }
];

const SettingsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isThemeLight } = useSelector(selectorThemeSlice);
  const [themeSwitchValue, setThemeSwitchValue] = useState(isThemeLight);

  useEffect(() => {
    toast('You on Settings Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  const handleThemeSwitch = (value: boolean) => {
    console.log(value);
    if (value) {
      console.log('light');
      setThemeSwitchValue(true);
      dispatch(setThemeLight());
    } else {
      console.log('dark');
      setThemeSwitchValue(false);
      dispatch(setThemeDark());
    }
  };

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Descriptions title="User settings" bordered>
        <Descriptions.Item label="Theme mode">
          <Switch
            onChange={handleThemeSwitch}
            checkedChildren="Light theme ☀️"
            unCheckedChildren="Dark theme 🌙"
            defaultChecked={themeSwitchValue}
          />
        </Descriptions.Item>
      </Descriptions>
    </ContainerContent>
  );
};

export default SettingsPage;
