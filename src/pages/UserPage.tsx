import { Descriptions, Row, Skeleton } from 'antd';
import { FC, useEffect } from 'react';
import ContainerContent from '../components/ContainerContent';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { useSelector } from 'react-redux';
import { selectorUsersSlice } from '../store/reducers/usersSlice';
import toast from 'react-hot-toast';

const breadcrumbItems = [
  {
    title: <Link to={ROUTES.HOME_ROUTE}>Home</Link>
  },
  {
    title: <Link to={ROUTES.USERS_ROUTE}>Users</Link>
  },
  {
    title: 'Single User'
  }
];

interface UserPageProps {}

const UserPage: FC<UserPageProps> = () => {
  const { id } = useParams();

  useEffect(() => {
    toast('You on Single User Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  const { users, isLoading } = useSelector(selectorUsersSlice);
  const userData = users.find((user) => String(user.id) === id);
  if (!userData) return <Navigate to={ROUTES.USERS_ROUTE} />;

  const {
    name,
    username,
    email,
    phone,
    website,
    address: { street, suite, city, zipcode },
    company: { name: companyName, catchPhrase, bs }
  } = userData;

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Skeleton loading={isLoading} active>
        <Descriptions title={`Details for ${name}`} bordered>
          <Descriptions.Item label="Name">{name}</Descriptions.Item>
          <Descriptions.Item label="Username">{username}</Descriptions.Item>
          <Descriptions.Item label="email">{email}</Descriptions.Item>
          <Descriptions.Item label="phone">{phone}</Descriptions.Item>
          <Descriptions.Item label="website">{website}</Descriptions.Item>
          <Descriptions.Item label="street">{street}</Descriptions.Item>
          <Descriptions.Item label="suite">{suite}</Descriptions.Item>
          <Descriptions.Item label="city">{city}</Descriptions.Item>
          <Descriptions.Item label="zipcode">{zipcode}</Descriptions.Item>
          <Descriptions.Item label="companyName">{companyName}</Descriptions.Item>
          <Descriptions.Item label="catchPhrase">{catchPhrase}</Descriptions.Item>
          <Descriptions.Item label="bs">{bs}</Descriptions.Item>
        </Descriptions>
      </Skeleton>
    </ContainerContent>
  );
};

export default UserPage;
