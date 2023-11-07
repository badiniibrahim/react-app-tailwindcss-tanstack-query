import { useCallback } from "react";
import { usePosts } from "../hooks/usePosts";
import PostsList from "../components/PostList";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const PostsPage = () => {
  const { isLoading, isSuccess, data } = usePosts();
  const navigate = useNavigate();

  const handlePress = useCallback(
    (id: number) => {
      navigate(`/detail/${id}`);
    },
    [navigate]
  );

  return (
    <div className="mt-3 flex flex-wrap gap-5">
      {isLoading && <Loader />}
      {isSuccess && data && <PostsList posts={data} onPress={handlePress} />}
    </div>
  );
};

export default PostsPage;
