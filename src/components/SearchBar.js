import React, { Component } from 'react';
import styled from 'styled-components';

class SearchBar extends Component {
  state = { searchText: '' }

  render() {
    return (
      <Bar>
        <SearchInput />
      </Bar>
    );
  }
}

const Bar = styled.div`
  height: 40px;
  width: 300px;
  border: 2px solid #3399FF;
  border-radius: 5px;
`

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  text-align: center;
`

export default SearchBar;