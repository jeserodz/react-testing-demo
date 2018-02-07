import postReducer from '../../src/reducers/postReducer';
import Types from '../../src/actions/types';

describe('Post reducer', () => {

  it('should have an initial state', () => {
    const previousState = undefined;
    const fakeAction = {};
    expect(postReducer(previousState, fakeAction)).toEqual({
      posts: []
    });
  });

  it('should handle post/GET_POSTS action', () => {
    const previousState = { 
      posts: [{
        "userId": 100,
        "id": 100,
        "title": "to be replaced",
        "body": "to be replaced"
      }] 
    };

    const action = {
      type: Types.post.GET_POSTS,
      posts: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]
    };

    expect(postReducer(previousState, action)).toEqual({
      posts: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]
    });
    
  });

});