import { FC } from 'react';

import { Posts } from '../types';

type Props = {
  post: Posts;
  onPress: () => void;
};

const PostsItem: FC<Props> = ({ post, onPress }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow hover:shadow-lg dark:bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">{post.body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          onClick={onPress}
          className="hover:bg-green-700 hover:text-white inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer shadow hover:shadow-lg"
        >
          Voir le detail
        </span>
      </div>
    </div>
  );
};

export default PostsItem;
