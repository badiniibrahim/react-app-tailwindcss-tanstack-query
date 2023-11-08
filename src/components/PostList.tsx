import { FC, useId, useMemo } from 'react';

import PostsItem from './PostsItem';
import { Posts } from '../types';

type Props = {
  posts: Posts[];
  onPress: (id: number) => void;
};

const PostsList: FC<Props> = ({ posts, onPress }) => {
  const id = useId();

  const memoizedPosts = useMemo(() => {
    return posts.map((post) => (
      <PostsItem
        key={`${id}-${post.id}`}
        post={post}
        onPress={() => onPress(post.id)}
      />
    ));
  }, [id, onPress, posts]);

  return <>{memoizedPosts}</>;
};

export default PostsList;
