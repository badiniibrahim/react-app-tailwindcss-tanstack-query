import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import Loader from '../components/Loader';
import PostsList from '../components/PostList';
import { usePosts } from '../hooks/usePosts';

const PostsPage = () => {
  const { isLoading, isSuccess, data } = usePosts();
  const navigate = useNavigate();

  const handlePress = useCallback(
    (id: number) => {
      navigate(`/detail/${id}`);
    },
    [navigate],
  );

  return (
    <div className="mt-3 flex flex-wrap gap-5">
      {isLoading && <Loader />}
      {isSuccess && data && <PostsList posts={data} onPress={handlePress} />}
    </div>
  );
};

export default PostsPage;
