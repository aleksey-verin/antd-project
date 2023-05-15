import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { useSelector } from 'react-redux';
import { selectorPostsSlice } from '../store/reducers/postsSlice';
import { selectorUsersSlice } from '../store/reducers/usersSlice';

interface PostPageProps {}

const PostPage: FC<PostPageProps> = () => {
  const { posts } = useSelector(selectorPostsSlice);
  const { users } = useSelector(selectorUsersSlice);

  const { id } = useParams();
  const postData = posts.find((post) => String(post.id) === id);
  const userData = users.find((user) => user.id === postData?.userId);
  if (!postData) return <Navigate to={ROUTES.POSTS_ROUTE} />;

  return (
    <div>
      <div>Post {postData.id}</div>
      <div>{userData?.name}</div>
    </div>
  );
};

export default PostPage;
