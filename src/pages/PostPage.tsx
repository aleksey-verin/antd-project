import { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { useSelector } from 'react-redux';
import { selectorPostsSlice } from '../store/reducers/postsSlice';
import { selectorUsersSlice } from '../store/reducers/usersSlice';
import { useAppDispatch } from '../hooks/redux';
import {
  clearComments,
  getComments,
  postNewComment,
  selectorCommentsSlice
} from '../store/reducers/commentsSlice';
import { toast } from 'react-hot-toast';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Descriptions, Button, Input, Form, Skeleton } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: <Link to="/posts">Posts</Link>
  },
  {
    title: 'Single Post'
  }
];

interface PostPageProps {}

const PostPage: FC<PostPageProps> = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector(selectorPostsSlice);
  const { users } = useSelector(selectorUsersSlice);
  const { comments, isLoading, isLoadingComment } = useSelector(selectorCommentsSlice);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getComments(id));
    }
    return () => {
      dispatch(clearComments());
    };
  }, [id, dispatch]);

  const [form] = Form.useForm();

  // const handleForm = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (id) {
  //     const sendComment = dispatch(postNewComment({ ...formValue, postId: +id }));

  //     toast.promise(sendComment, {
  //       loading: 'Loading',
  //       success: () => {
  //         setFormValue(defaultFormValue);
  //         return 'Comment added successfully';
  //       },
  //       error: 'Error when adding a comment'
  //     });
  //   }
  // };

  useEffect(() => {
    toast('You on Single Post Page!', {
      duration: 1000,
      icon: '👏'
    });
    window.scrollTo(0, 0);
  }, []);

  console.log(comments);

  const onFinish = (values: { name: string; email: string; body: string }) => {
    if (id) {
      const sendComment = dispatch(postNewComment({ ...values, postId: +id }));

      toast.promise(sendComment, {
        loading: 'Loading',
        success: () => {
          form.resetFields();
          return 'New comment added successfully';
        },
        error: 'Error when adding a comment'
      });
    }
  };

  const postData = posts.find((post) => String(post.id) === id);
  const userData = users.find((user) => user.id === postData?.userId);
  if (!postData) return <Navigate to={ROUTES.POSTS_ROUTE} />;

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Title style={{ marginBottom: 20 }} level={5}>
        {`Single post by ${userData?.name}`}
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col span={24}>
          <Card title={postData.title} style={{ width: 'auto', height: '100%' }}>
            <p>{`Author: ${userData?.name}`}</p>
            <p style={{ fontSize: 16 }}>{postData.body}</p>
          </Card>
        </Col>
      </Row>
      <Skeleton loading={isLoading} active>
        <Descriptions title="Comments:" bordered>
          {comments.map(({ id, name, body, email }) => (
            <Descriptions.Item key={id} span={3} label={`${name} (${email})`}>
              {body}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Skeleton>
      <div>
        <Title style={{ margin: '20px 0', textAlign: 'center' }} level={5}>
          Add a new comment:
        </Title>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0 auto' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Your name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Comment"
            name="body"
            rules={[{ required: true, message: 'Please input your comment!' }]}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={isLoadingComment}>
              Send comment
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ContainerContent>
  );
};

export default PostPage;
