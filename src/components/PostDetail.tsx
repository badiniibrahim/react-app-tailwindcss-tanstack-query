import { FC } from 'react';

import { Posts } from '../types';

type Props = {
  post: Posts;
};

const PostDetail: FC<Props> = ({ post }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow hover:shadow-lg dark:bg-white h-[100px]">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title.toUpperCase()}</div>
        <p className="text-gray-700 text-base">{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
