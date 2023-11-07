import React from "react";
import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/usePostsDetail";
import PostDetail from "../components/PostDetail";
import Loader from "../components/Loader";

const PostPageDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useGetPost(id!);

  return (
    <div className="flex items-center mx-auto">
      {isLoading && <Loader />}
      {data && <PostDetail post={data} />}
    </div>
  );
};

export default PostPageDetail;
