import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import actions from './actions';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import SearchResults from './containers/SearchResults';

class App extends Component {
  
  componentWillMount() {
    store.dispatch(actions.post.getPosts());
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <SearchBar/>
          <SearchResults/>
        </Container>
      </Provider>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default App;
