import React from 'react';

import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import PostDetail from '../components/PostDetail';
import { useGetPost } from '../hooks/usePostsDetail';

const PostPageDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useGetPost(id!);

  return (
    <div className="flex h-screen">
      {isLoading && <Loader />}
      {data && <PostDetail post={data} />}
    </div>
  );
};

export default PostPageDetail;
