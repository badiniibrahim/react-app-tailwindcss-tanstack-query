import { FC, useId } from "react";
import { Posts } from "../types";
import PostsItem from "./PostsItem";

type Props = {
  posts: Posts[];
  onPress: (id: number) => void;
};

const PostsList: FC<Props> = ({ posts, onPress }) => {
  const id = useId();

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostsItem
            key={`${id}-${post.id}`}
            post={post}
            onPress={() => onPress(post.id)}
          />
        ))
      ) : (
        <div>Pas de donnée</div>
      )}
    </>
  );
};

export default PostsList;
