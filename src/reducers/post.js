import Types from '../actions/types';

const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.post.GET_POSTS: {
      const {posts} = action;
      return {...state, posts};
    }
    default:
      return state;
  }
}