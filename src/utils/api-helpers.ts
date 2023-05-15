export const getPostsRequest = (userId: string | void): URL => {
  const _url = new URL('https://jsonplaceholder.typicode.com/posts');
  if (userId === 'none') return _url;
  if (userId) {
    _url.searchParams.append('userId', userId);
  }
  return _url;
};
