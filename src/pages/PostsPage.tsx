import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPosts, selectorPostsSlice } from '../store/reducers/postsSlice';
import { selectorUsersSlice } from '../store/reducers/usersSlice';
import { useAppDispatch } from '../hooks/redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

interface PostsPageProps {}

const PostsPage: FC<PostsPageProps> = () => {
  const dispatch = useAppDispatch();
  const { posts, isError } = useSelector(selectorPostsSlice);
  const { users } = useSelector(selectorUsersSlice);

  const [selectValue, setSelectValue] = useState('all');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectValue(value);
    dispatch(getPosts(value));
  };

  if (isError) return <div>Ошибка</div>;

  return (
    <div>
      <div>
        <label>
          Choose user:
          <select name="user" id="user" value={selectValue} onChange={handleSelect}>
            <option value="none">-----</option>
            {users.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{`${post.id} ${post.userId} ${post.title} ${post.body}`}</div>
          <Link to={`${ROUTES.POSTS_ROUTE}/${post.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
