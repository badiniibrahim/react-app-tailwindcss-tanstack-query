import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';

import apiRequest from '../service';
import { Posts } from '../types';

export const useGetPost = (key: string) => {
  return useQuery<Posts, Error>({
    queryKey: ['posts', key],
    queryFn: getPostDetail,
  });
};

const getPostDetail: QueryFunction<Posts, QueryKey> = async ({ queryKey }) => {
  try {
    const response = await apiRequest<Posts>({
      path: `/posts/${queryKey[1]}`,
      method: 'get',
    });
    return response;
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des données.",
    );
  }
};
