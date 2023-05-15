import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectorPostsSlice } from '../store/reducers/postsSlice';

interface PostsPageProps {}

const PostsPage: FC<PostsPageProps> = () => {
  const { posts, isError } = useSelector(selectorPostsSlice);
  if (isError) return <div>Ошибка</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{`${post.id} ${post.userId} ${post.title} ${post.body}`}</div>
      ))}
    </div>
  );
};

export default PostsPage;
