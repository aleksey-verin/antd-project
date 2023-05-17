import React, { FC, useEffect, useState } from 'react';
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

interface PostPageProps {}

const defaultFormValue = {
  name: '',
  email: '',
  body: ''
};

const PostPage: FC<PostPageProps> = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector(selectorPostsSlice);
  const { users } = useSelector(selectorUsersSlice);
  const { comments } = useSelector(selectorCommentsSlice);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getComments(id));
    }
    return () => {
      dispatch(clearComments());
    };
  }, [id, dispatch]);

  const [formValue, setFormValue] = useState(defaultFormValue);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      const sendComment = dispatch(postNewComment({ ...formValue, postId: +id }));

      toast.promise(sendComment, {
        loading: 'Loading',
        success: () => {
          setFormValue(defaultFormValue);
          return 'Comment added successfully';
        },
        error: 'Error when adding a comment'
      });
    }
  };

  useEffect(() => {
    toast('You on Single Post Page!', {
      duration: 1000,
      icon: '👏'
    });
  }, []);

  console.log(comments);

  const postData = posts.find((post) => String(post.id) === id);
  const userData = users.find((user) => user.id === postData?.userId);
  if (!postData) return <Navigate to={ROUTES.POSTS_ROUTE} />;

  return (
    <div>
      <div>Post {postData.id}</div>
      <div>{userData?.name}</div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.body}</div>
      ))}
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formValue.email}
          onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
        />
        <label htmlFor="comment">Comment</label>
        <input
          id="comment"
          type="text"
          value={formValue.body}
          onChange={(e) => setFormValue({ ...formValue, body: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default PostPage;
