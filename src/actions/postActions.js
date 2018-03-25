import Types from './types';
import postService from '../services/postService';

export const getPosts = (id) => async dispatch => {
  try {
    const posts = await postService.get(id);
    dispatch({
      type: Types.post.GET_POSTS,
      posts
    });
  } catch(error) {
    throw error;
  }
}