import reducers from '../../src/reducers';
import Actions from '../../src/actions';

describe('Post reducer', () => {

  it('should have an initial state', () => {
    const previousState = undefined;
    const fakeAction = {};
    expect(reducers.post(previousState, fakeAction)).toEqual({
      posts: []
    });
  });

  it(`should handle ${Actions.Types.post.GET_POSTS} action`, () => {
    const previousState = { 
      posts: [{
        "userId": 100,
        "id": 100,
        "title": "to be replaced",
        "body": "to be replaced"
      }] 
    };

    const action = {
      type: Actions.Types.post.GET_POSTS,
      posts: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]
    };

    expect(reducers.post(previousState, action)).toEqual({
      posts: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]
    });
    
  });

});