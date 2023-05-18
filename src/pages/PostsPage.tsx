import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPosts, selectorPostsSlice } from '../store/reducers/postsSlice';
import { selectorUsersSlice } from '../store/reducers/usersSlice';
import { useAppDispatch } from '../hooks/redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { toast } from 'react-hot-toast';
import ContainerContent from '../components/ContainerContent';
import { Card, Col, Row, Select, Skeleton, Typography } from 'antd';

const { Title } = Typography;

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Posts'
  }
];

interface PostsPageProps {}

const PostsPage: FC<PostsPageProps> = () => {
  const dispatch = useAppDispatch();
  const { posts, isError, isLoading } = useSelector(selectorPostsSlice);
  const { users } = useSelector(selectorUsersSlice);

  const handleSelect = (value: string) => {
    dispatch(getPosts(value));
  };
  useEffect(() => {
    toast('You on Posts Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  if (isError) return <div>Ошибка</div>;

  const selectValues = users.map(({ id, name }) => ({
    value: id,
    label: name
  }));

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Row>
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            marginBottom: 20
          }}>
          <Title style={{ marginBottom: 0 }} level={4}>
            Select or type the author of posts:
          </Title>
          <Select
            style={{ width: 220 }}
            showSearch
            placeholder="Select or type the author.."
            optionFilterProp="children"
            onChange={handleSelect}
            allowClear
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={selectValues}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Skeleton loading={isLoading} active>
          {posts.map(({ id, userId, title, body }) => (
            <Col span={8} key={id}>
              <Card
                title={title}
                extra={<Link to={`${ROUTES.POSTS_ROUTE}/${id}`}>More details..</Link>}
                style={{ width: 'auto', height: '100%' }}>
                <p>{`Author: ${users.find((user) => user.id === userId)?.name}`}</p>
                <p>{body}</p>
              </Card>
            </Col>
          ))}
        </Skeleton>
      </Row>
    </ContainerContent>
  );
};

export default PostsPage;
