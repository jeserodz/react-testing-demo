import Types from './types';
import postService from '../services/postService';

export const getPosts = () => async dispatch => {
  try {
    const posts = await postService.get();
    dispatch({
      type: Types.post.GET_POSTS,
      posts
    });
  } catch(error) {
    console.error(error.toString());
  }
}