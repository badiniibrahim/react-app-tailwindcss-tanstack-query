import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';

import apiRequest from '../service';
import { Posts } from '../types';

export const usePosts = () => {
  return useQuery<Posts[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};

const fetchPosts: QueryFunction<Posts[], QueryKey> = async ({ queryKey }) => {
  try {
    const response = await apiRequest<Posts[]>({
      path: '/posts',
      method: 'get',
    });
    return response;
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des données.",
    );
  }
};
