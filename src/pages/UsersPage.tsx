import { FC, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Skeleton } from 'antd';
import { ROUTES } from '../routes/routes';
import { useSelector } from 'react-redux';
import { selectorUsersSlice } from '../store/reducers/usersSlice';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Users'
  }
];

const UsersPage: FC = () => {
  const { users, isLoading } = useSelector(selectorUsersSlice);

  useEffect(() => {
    toast('You on Users Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Row gutter={[16, 16]}>
        <Skeleton loading={isLoading} active>
          {users.map(({ id, name, email, username }) => (
            <Col span={6} key={id}>
              <Card
                title={name}
                extra={<Link to={`${ROUTES.USERS_ROUTE}/${id}`}>More details..</Link>}
                style={{ width: 'auto', height: '100%' }}>
                <p style={{ wordBreak: 'break-all' }}>{`Username: ${username}`}</p>
                <p style={{ wordBreak: 'break-all' }}>{`Email: ${email}`}</p>
              </Card>
            </Col>
          ))}
        </Skeleton>
      </Row>
    </ContainerContent>
  );
};

export default UsersPage;
