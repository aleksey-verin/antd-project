import { FC } from 'react';
import ContainerContent from '../components/ContainerContent';

const breadcrumbItems = [
  {
    title: 'Home'
  }
];

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <div>Home Page</div>
    </ContainerContent>
  );
};

export default HomePage;
