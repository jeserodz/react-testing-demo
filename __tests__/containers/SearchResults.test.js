import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedSearchResults, { SearchResults } from '../../src/containers/SearchResults';

describe('SearchResults container', () => {
  const initialState = {
    post: {
      posts: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]
    }
  };

  const store = configureStore()(initialState);
  
  it('Render search results for each post', () => {
    const wrapper = shallow(<SearchResults posts={initialState.post.posts} />);
    expect(wrapper.find('SearchResult').length).toEqual(1);
  });

  it('Should connect to redux', () => {
    const container = shallow(<ConnectedSearchResults store={store} />);
    expect(container.prop('posts')).toEqual(initialState.post.posts);
  });

});