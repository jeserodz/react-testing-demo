import Types from './types';
import postService from '../services/post';

export const getPosts = () => async dispatch => {
  try {
    const response = await postService.get();
    dispatch({
      type: Types.post.GET_POSTS,
      posts: response.data
    });
  } catch(error) {
    console.error(error.toString());
  }
}